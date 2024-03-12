# Apache Pinot Website

## Description

This is the private repository for the Apache Pinot blog and documentation website. It contains all the source code and materials required for the development and deployment of the site. The website serves as a central platform for the Apache Pinot community to access the blog posts, tutorials, and comprehensive documentation.

Apache Pinot is an open-source, distributed OLAP datastore designed to deliver real-time analytics with low latency and high throughput. The goal of this website is to provide an informative, responsive, and engaging user experience to all community members.

## Getting Started

### Dependencies

Before proceeding, make sure you have the following prerequisites installed:

-   Node.js v20
-   Yarn package manager
-   A preferred IDE (e.g., VSCode, WebStorm)

The project utilizes the following technologies:

-   **Next.js v14 (with app router)**: A React framework designed for production environments.
-   **TypeScript**: A statically typed superset of JavaScript for writing clear and defined code.
-   **TailwindCSS**: A utility-first CSS framework that enables rapid UI development.
-   **ContentLayer**: A content management toolkit that simplifies content handling in modern web applications.
-   **shadcn UI Components**: A suite of pre-built, customizable UI components.
-   **Custom Components**: Specialised components developed to cater to the unique needs of the Apache Pinot website.

### .nvmrc

The codebase provides a `.nvmrc` file. Therefore, if you have `nvm` installed, simply run `nvm use` in your terminal in order to use the preferred Node version.

## Installation

Clone the repository and install dependencies to set up your local development environment:

```bash
    git clone https://github.com/startreedata/pinot-docs-site-prototype
    cd pinot-docs-site
    yarn install
```

## Running the Application

To start the development server:

```bash
    yarn dev
```

Visit <http://localhost:3000> in your browser to view the website. The development server features hot-reloading to reflect changes instantly.

## Building for Production

Generate a production build using:

```bash
    yarn build
```

Then, launch the production server with:

```bash
    yarn serve
```

## Testing

Execute the test suite with:

```bash
    yarn test
```

Please ensure all tests pass before merging any changes to maintain the integrity of the application.

## Code Quality with ESLint and Prettier

To maintain high code quality and consistent styling, we use ESLint for static code analysis and Prettier for formatting. Run the following commands to check and fix linting and formatting issues:

```bash
    yarn lint
    yarn check
    yarn format
```

## Husky

Additionally, Husky is used to apply pre-commit and pre-push hooks to run linting and formatting checks, ensuring that issues are caught early on.

When you clone the repository and run `yarn install`, Husky will automatically set up the Git hooks defined in our configuration.

### Husky Hooks

Our current Husky setup includes the following hooks:

-   pre-commit: Runs ESLint and Prettier to check and format staged files.
-   pre-push: Executes the test suite to ensure all tests pass before allowing a push to the repository.

If you encounter any issues with your commit due to these hooks, please address the reported issues before proceeding. If the hooks alter your files, you will need to add the changes to your commit:

```bash
    git add .
    git commit -m "Your commit message"

```

Running the commands above will re-run the hooks, and if no issues are detected, your commit will be successful.

For more information on Husky and how to customize its behavior, see the Husky documentation <https://typicode.github.io/husky/>.

## Deployment

The website is deployed using Vercel, which offers direct integration with Next.js projects. For deployment instructions, refer to Vercel's official documentation <https://vercel.com/docs>.

## Writing Blog Post

Please find our guide about writing blog posts in `CONTRIBUTION.md` in this project.

## Releaseing New Apache Pinot

Please find our guide about releasing a new version of Apache Pinot in `RELEASE.md` in this project.

## Contacts

Should you require any support, please get in touch with DevRel Team.
