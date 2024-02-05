# RD Station Front-end Marketing challenge

![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=rd-station-business-card-generator) ![License](https://img.shields.io/badge/license-MIT-blue)

<img src=".github/logo-rd-station-default.svg" width="50%" height="auto" alt='RD Station Logo'>

Welcome to the Resultados Digitais Business Card Generator Challenge! In this challenge, you'll embark on an exciting journey to create a digital business card generator application. Users will be able to fill out essential details and craft their personalized business cards. The project focuses on responsiveness, adhering to best practices, and implementing thorough form validation. You'll also ensure that the generated business cards utilize the provided data and implement various user-friendly features. Join us in this engaging challenge and unleash your frontend development skills!

Please refer to the documentation in the `docs` folder for specific requirements of this coding challenge.

To set up and run the project on your local machine, follow the instructions provided below.

## 🤖 Tech stack

The RD Station Front-end Marketing challenge leverages a robust and modern tech stack to ensure high performance, ease of development, and scalability. Here's a breakdown of the core technologies and libraries used:

- **[Next.js](https://nextjs.org/)**: A powerful React framework that enables server-side rendering, static site generation, and optimized performance for web applications.
- **[React](https://reactjs.org/)**: A popular JavaScript library for building dynamic and responsive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs with an emphasis on responsiveness and maintainability.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter that supports multiple languages and integrates with most editors.
- **[ESLint](https://eslint.org/)**: A powerful tool for identifying and fixing problems in JavaScript code, ensuring code quality and consistency.
- **[React Hook Form](https://react-hook-form.com/)**: A library for building forms in React, providing easy data handling and validation.
- **[Zod](https://github.com/colinhacks/zod)**: A TypeScript-first schema declaration and validation library, ensuring data integrity.
- **[Zustand](https://github.com/pmndrs/zustand)**: A minimal, yet powerful state management solution for React applications.
- **[Testing Library](https://testing-library.com/)**: A set of utilities that allow you to test UI components in a user-centric way.

To maintain high code quality and ensure that all tests pass, we use GitHub Actions for automated testing. This integration streamlines our development process, allowing for more efficient and effective testing workflows.

## ⚒️ Prerequisites

Before starting with the RD Station Front-end Marketing challenge, ensure you meet the following requirements:

- **Node.js (v16 or higher)**: The project requires Node.js version 16 or higher. If you haven't installed it yet or need to upgrade, visit the [Node.js download page](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is utilized to manage the project's dependencies. It comes bundled with Node.js. You can check your npm version by running `npm -v` in your terminal.
- **bun**: (optional) As an efficient alternative to npm, Yarn and pnpm, this project supports [bun](https://bun.sh/), known for its speed and efficiency in handling packages. Follow the instructions on the bun website for installation and usage.
- **A Code Editor**: Use a code editor like [Visual Studio Code](https://code.visualstudio.com/) (preferable), [Sublime Text](https://www.sublimetext.com/), [Atom](https://atom.io/) or why not [Adobe Dreamweaver](https://www.adobe.com/br/products/dreamweaver.html) ([remember that?](https://en.wikipedia.org/wiki/Adobe_Dreamweaver)) for an enhanced development experience.

## 🚀 Installation and Running Instructions

Getting this project up and running on your local machine involves a few straightforward steps. Here's an overview of what you'll need to do:

1. **Download and Install Dependencies**: Start by cloning the project to your local machine and installing all the necessary dependencies. This ensures that you have all the required libraries and tools to run the project successfully.

2. **Configure Environment Variables**: Next, you'll set up the environment variables. This step is crucial as it involves configuring the project with the necessary settings and API endpoints it needs to function correctly.

3. **Running the Project**: Finally, once the dependencies are installed and the environment is configured, you can start the development server. This will allow you to run the project locally and see your changes in real time.

### 1 - Download and Install Dependencies

**Clone the Repository**: First, clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/johanguse/rd-station-business-card-generator.git
```

**Navigate to the Project Directory**: After cloning, move into the project directory with this command:

```bash
cd rd-station-business-card-generator
```

**Install Dependencies**: Finally, install all necessary dependencies. You can use pnpm, but npm or yarn are also compatible. Execute one of the following commands:

```bash
bun install  # You can also use npm, yarn or pnpm if you prefer
```

### 2 - Environment Configuration

Configuring the environment variables correctly is crucial for the application to run smoothly. Follow these steps to set up your environment:

**Copy the Example Environment File**: Start by creating a copy of the `.env.example` file. This file contains template environment variables that the app needs. You can create a copy for local development using the following command:

```bash
# .env
cp .env.example .env
```

### 3 - Running the Development Server

After successfully installing the dependencies, you're ready to launch the development server. Follow these steps to get it running on your local machine:

**Start the Development Server**: To initiate the server, open your terminal and execute the following command:

```bash
bun run dev  # You can also use npm, yarn or pnpm if you prefer
```

   This command fires up the Next.js development server.

**Accessing the Server**: By default, the server will be accessible at [http://localhost:3000](http://localhost:3000). You can use this URL to view your application in a web browser.

   Note: The default port (3000) can be modified in the project settings if necessary.

## 🧪 Test

We have included both unit and end-to-end tests for this project. You can run the tests using the following commands:

```bash
bun run test  # You can also use npm, yarn or pnpm if you prefer
```

Or you can run individual tests:

Run Unit Tests:

```bash
npm run test:unit
```

Run End-to-End Tests:

```bash
npm run test:e2e
```

## 🏵️ Extra

We use ESLint and Prettier to ensure code quality and consistency. You can run the linting and formatting checks using the following command:

```bash
bun run lint  # You can also use npm, yarn or pnpm if you prefer
```

## License

This project is licensed under the MIT License.
