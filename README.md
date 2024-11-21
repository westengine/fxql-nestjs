# FXQL NestJS Application

This project is a NestJS application designed to manage currency exchange rates using FXQL (Forex Query Language).

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Local Development Requirements](#local-development-requirements)
- [Environment Variables](#environment-variables)
- [Repository Setup](#repository-setup)
- [API Documentation](#api-documentation)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [License](#license)

## Setup Instructions

To set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fxql-nestjs.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd fxql-nestjs
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create a PostgreSQL database and update the environment variables accordingly.**

5. **Run the application:**
   ```bash
   npm run start
   ```

## Local Development Requirements

- Node.js (>=14.x)
- PostgreSQL
- TypeScript

## Environment Variables

Create a `.env` file in the root of your project with the following variables:

```ini
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=fxql_db
```

> **Note:** Replace `your_username` and `your_password` with your actual PostgreSQL credentials.

## Repository Setup

### Setting up .gitignore

1. **Create a .gitignore file:**
   ```bash
   touch .gitignore
   ```

2. **Add the following content to .gitignore:**
   ```text
   # Node modules
   /node_modules

   # Environment variables file
   .env

   # Build directory
   /dist

   # Logs
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
   ```

### Initial Repository Setup

1. **Add and commit the changes:**
   ```bash
   git add README.md .gitignore
   git commit -m "Add README and .gitignore"
   ```

2. **Push the changes to GitHub:**
   ```bash
   git push
   ```

## API Documentation

[API documentation will be inserted here. Documentation should include:
- Available endpoints
- Request methods
- Request parameters
- Response formats
- Example requests and responses]

## Assumptions and Design Decisions

- The application is designed to manage exchange rates with basic CRUD functionality
- Assumed familiarity with NestJS, TypeORM, and PostgreSQL
- The design follows a modular architecture for maintainability
- Database operations are performed using TypeORM for type safety and maintainability
- Environment variables are used for configuration management
- Git version control is implemented with proper ignore patterns

## License

This project is licensed under the MIT License.

---

## Contributing

Please read our contributing guidelines before submitting pull requests or creating issues.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
