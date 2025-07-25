import { getWeatherForCity } from '../weatherService';
import request from 'supertest';
import express from 'express';
import { weatherRoutes } from '../weatherRoutes';

const app = express();
app.use(express.json());
app.use('/api/weather', weatherRoutes);

describe('Weather Service Tests', () => {
  describe('getWeatherForCity', () => {
    it('should return weather data for valid city', async () => {
      const weatherData = await getWeatherForCity('Jakarta');
      expect(weatherData).toHaveProperty('city');
      expect(weatherData).toHaveProperty('temperature');
      expect(weatherData.city).toBe('Jakarta');
    });

    it('should handle weather data structure correctly', async () => {
      const weatherData = await getWeatherForCity('Bandung');
      expect(typeof weatherData.temperature).toBe('number');
      expect(typeof weatherData.conditions).toBe('string');
      expect(typeof weatherData.humidity).toBe('number');
      expect(typeof weatherData.wind_speed).toBe('number');
      expect(typeof weatherData.date_recorded).toBe('string');
    });

    it('should validate weather data structure', async () => {
      const weatherData = await getWeatherForCity('Surabaya');
      
      // Check required properties
      expect(weatherData).toHaveProperty('city');
      expect(weatherData).toHaveProperty('temperature');
      expect(weatherData).toHaveProperty('conditions');
      expect(weatherData).toHaveProperty('humidity');
      expect(weatherData).toHaveProperty('wind_speed');
      expect(weatherData).toHaveProperty('date_recorded');
      
      // Check data types
      expect(typeof weatherData.city).toBe('string');
      expect(typeof weatherData.temperature).toBe('number');
      expect(typeof weatherData.conditions).toBe('string');
      expect(typeof weatherData.humidity).toBe('number');
      expect(typeof weatherData.wind_speed).toBe('number');
      expect(typeof weatherData.date_recorded).toBe('string');
      
      // Check value ranges
      expect(weatherData.temperature).toBeGreaterThanOrEqual(-50);
      expect(weatherData.temperature).toBeLessThanOrEqual(60);
      expect(weatherData.humidity).toBeGreaterThanOrEqual(0);
      expect(weatherData.humidity).toBeLessThanOrEqual(100);
      expect(weatherData.wind_speed).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('Weather API Routes', () => {
  test('GET /api/weather/current should return 200', async () => {
    const response = await request(app).get('/api/weather/current?city=Jakarta');
    expect(response.status).toBe(200);
  });

  test('GET /api/weather/search should return 200', async () => {
    const response = await request(app).get('/api/weather/search?q=Jakarta');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('results');
  });

  test('GET /api/weather/history/Jakarta should return 200', async () => {
    const response = await request(app).get('/api/weather/history/Jakarta');
    expect(response.status).toBe(200);
  });

  test('GET /api/weather/analysis/Jakarta should return 200', async () => {
    const response = await request(app).get('/api/weather/analysis/Jakarta');
    expect(response.status).toBe(200);
  });
}); 