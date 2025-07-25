# Weather Report Application with CI/CD Pipeline

This project demonstrates a comprehensive CI/CD pipeline setup with AI assistance, including linting, testing, building, and SonarCloud integration.

## 🚀 Features

- **Weather API**: Backend application for weather data retrieval
- **TypeScript**: Full TypeScript implementation
- **CI/CD Pipeline**: GitHub Actions workflow with multiple stages
- **SonarCloud Integration**: Code quality analysis and quality gates
- **Security Scanning**: Automated security vulnerability detection
- **Test Coverage**: Comprehensive test suite with coverage reporting

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- GitHub account
- SonarCloud account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhajirshiddiqaf/Assignment-14Setting-up-CI-CD-with-AI-Tools.git
   cd Assignment-14Setting-up-CI-CD-with-AI-Tools/weather-report
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 🧪 Testing

Run the test suite with coverage:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests for CI:

```bash
npm run test:ci
```

## 🔧 Development

Start development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 🔍 Code Quality

Run linting:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

Type checking:

```bash
npm run type-check
```

## 🚀 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow with the following stages:

### 1. **Lint Stage**
- ESLint configuration with TypeScript support
- TypeScript compilation check
- Code style enforcement

### 2. **Test Stage**
- Jest test runner with TypeScript support
- Coverage reporting
- Integration and unit tests

### 3. **Build Stage**
- TypeScript compilation
- Build artifact generation
- Build verification

### 4. **SonarCloud Analysis**
- Code quality analysis
- Security vulnerability detection
- Code coverage integration
- Quality gate enforcement

### 5. **Security Scan**
- npm audit for dependency vulnerabilities
- Snyk security scanning
- High-severity vulnerability detection

### 6. **Deploy Stage** (Optional)
- Staging environment deployment
- Deployment verification

## 📊 SonarCloud Configuration

### Quality Gate Settings

The SonarCloud quality gate is configured to **FAIL** if there are:

- **1 or more new bugs**
- **1 or more new vulnerabilities**
- **1 or more new code smells**
- **Less than 80% code coverage on new code**
- **More than 3% duplicated lines on new code**

### Setup Instructions

1. **Create SonarCloud Account**
   - Go to [SonarCloud](https://sonarcloud.io)
   - Sign up with your GitHub account

2. **Create Organization**
   - Create a new organization
   - Note your organization key

3. **Create Project**
   - Create a new project
   - Choose "GitHub" as the repository provider
   - Select your repository

4. **Configure GitHub Secrets**
   Add the following secrets to your GitHub repository:
   ```
   SONAR_TOKEN: Your SonarCloud token
   SNYK_TOKEN: Your Snyk token (optional)
   ```

5. **Update SonarCloud Configuration**
   - Update `sonar-project.properties` with your project key and organization
   - Ensure the project key matches your SonarCloud project

## 🔒 Security Features

- **Dependency Scanning**: Automated npm audit
- **Code Analysis**: SonarCloud security hotspots
- **Vulnerability Detection**: Snyk integration
- **Input Validation**: Request parameter validation
- **Error Handling**: Secure error responses

## 📈 Monitoring and Metrics

- **Code Coverage**: Jest coverage reports
- **Quality Metrics**: SonarCloud quality gates
- **Security Metrics**: Vulnerability scanning results
- **Build Metrics**: GitHub Actions workflow status

## 🏗️ Project Structure

```
weather-report/
├── source/
│   ├── __tests__/          # Test files
│   ├── app.ts              # Main application file
│   ├── weatherController.ts # API controllers
│   ├── weatherService.ts   # Business logic
│   ├── weatherRoutes.ts    # Route definitions
│   ├── weatherModel.ts     # Data models
│   ├── database.ts         # Database configuration
│   └── apiUtils.ts         # Utility functions
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml # GitHub Actions workflow
├── sonar-project.properties # SonarCloud configuration
├── jest.config.js          # Jest configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🤖 AI-Assisted Development

This project demonstrates AI-assisted development practices:

- **GitHub Copilot**: Code generation and suggestions
- **ChatGPT**: Workflow generation and optimization
- **Automated Testing**: AI-generated test cases
- **Code Quality**: AI-assisted linting and formatting

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:
- Create an issue in the GitHub repository
- Check the SonarCloud project dashboard
- Review the GitHub Actions workflow logs

## 🔄 Workflow Status

The CI/CD pipeline will run automatically on:
- Push to `main`, `develop`, or `Module-7` branches
- Pull requests to `main`, `develop`, or `Module-7` branches

Monitor the workflow status in the GitHub Actions tab of your repository.