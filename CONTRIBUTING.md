# Contributing to DAC Marketplace

Thank you for considering contributing to DAC Marketplace! This document outlines the process for contributing to the project and how to get started as a contributor.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others when contributing.

## Getting Started

1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Clone your fork locally.
   ```bash
   git clone https://github.com/YOUR-USERNAME/ThePrometheanSociety.git
   cd ThePrometheanSociety
   ```

3. **Install Dependencies**: Install all necessary dependencies.
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**: Create a `.env` file with necessary environment variables.
   ```
   DATABASE_URL=your_database_url
   OPENAI_API_KEY=your_openai_api_key
   SESSION_SECRET=your_session_secret
   ```

5. **Start the Development Server**: Run the application locally.
   ```bash
   npm run dev
   ```

## Development Workflow

1. **Create a Branch**: Always create a new branch for your work.
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**: Implement your changes while adhering to the code style of the project.

3. **Test Your Changes**: Ensure your changes work as expected and don't break existing functionality.
   ```bash
   npm test
   ```

4. **Update Documentation**: If your changes require documentation updates, make those changes in the same PR.

5. **Commit Your Changes**: Write clear, concise commit messages.
   ```bash
   git commit -m "Add feature: description of your changes"
   ```

6. **Push Your Changes**: Push your changes to your fork.
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**: Create a pull request from your branch to the main repository.

## Pull Request Guidelines

When submitting a pull request:

1. Provide a clear description of what your PR does.
2. Link any relevant issues using keywords like "Fixes #123" or "Addresses #456".
3. Include screenshots or GIFs for UI changes.
4. Ensure all tests pass.
5. Make sure your code is properly formatted and follows the project's style guide.

## Code Style

- Follow modern JavaScript/TypeScript practices
- Use ES6+ features where appropriate
- Write clean, readable code with appropriate comments
- Follow the existing code structure

## Adding Dependencies

Before adding a new dependency, consider:

1. Is it actively maintained?
2. Is the license compatible with our project?
3. Is it well-documented?
4. Could you implement the feature without adding a dependency?

If you decide to add a dependency, update the SBOM.md file to reflect the change:
```bash
node scripts/update-sbom.js
```

## Testing

Please write tests for your code changes. We use Vitest as our testing framework.

- Unit tests go in the `tests/unit` directory
- Integration tests go in the `tests/integration` directory
- E2E tests go in the `tests/e2e` directory

## Documentation

If you're updating features or adding new ones, please update the relevant documentation:

- README.md for general information
- API documentation for backend changes
- Component documentation for frontend changes

## Reporting Bugs

When reporting bugs, please include:

1. A clear description of the issue
2. Steps to reproduce the bug
3. Expected behavior
4. Actual behavior
5. Screenshots (if applicable)
6. Environment details (browser, OS, etc.)

## Feature Requests

Feature requests are welcome! Please use the issue tracker and:

1. Clearly describe the feature
2. Explain why it would be valuable
3. Outline how it might be implemented
4. Tag it with the "enhancement" label

## Questions?

If you have any questions or need help, please open an issue with the "question" label or reach out to the maintainers.

Thank you for contributing to DAC Marketplace!