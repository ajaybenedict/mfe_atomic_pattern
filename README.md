### Introduction
This project demonstrates a **microfrontend architecture** using the **atomic design pattern** for scalable component organization. 
It integrates a **shared CSS package** for consistent styling across microfrontends 
It uses a **JSON server** for simulating a backend, supporting CRUD operations

### Architecture Overview
- **Microfrontends**: Independent, decoupled applications developed and deployed separately. Each microfrontend represents a specific feature or module of the larger application.
- **Atomic Design Pattern**: Components are organized into atoms, molecules, and organisms to promote reusability and scalability.
- **Shared CSS Package**: A reusable npm package containing the shared styles, ensuring a consistent look and feel across microfrontends.
- **JSON Server**: Used as a mock database to handle CRUD operations for development purposes.

### Atomic Design Pattern
The project adheres to the **Atomic Design** principles by organizing UI components into the following categories:

- **Atoms**: The smallest components like buttons, inputs, and icons.
- **Molecules**: Combinations of atoms, such as a search bar (input + button).
- **Organisms**: Complex UI components formed from molecules and atoms, such as a header or a card list.

This helps create a consistent and scalable design system.

### Shared CSS Package
A **shared CSS package** is used to provide a unified style system across all microfrontends. The shared styles include:
- **Global styles**: Resets, typography, layout, and theming.
- **Atomic styles**: Specific styles for atoms, molecules, and organisms.

The shared package is versioned and can be reused across multiple microfrontends. It is included as a dependency in each microfrontend and updated as needed.

### JSON Server for CRUD Operations
The project uses **JSON Server** as a simple and fast mock REST API to perform **CRUD operations**. It serves as a fake backend to simulate database interactions during development.


### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

#### 2. Install Dependencies
For each microfrontend and the shared CSS package, install the dependencies:

```bash
npm install
```

#### 3. Run JSON Server
To simulate a backend, run the JSON Server:

```bash
npx json-server --watch db.json --port 8000
```

This will run the mock server on `http://localhost:8000` and serve the `db.json` file as a REST API.

#### 4. Link the Shared CSS Package (Optional)
During local development, you can link the **shared CSS package** to your microfrontends:

```bash
# In the shared CSS package directory
npm run build

# In each microfrontend directory
npm install D:\MFE\atomic_pattern\shared-css-package (alternate to npm publish and install)
```

#### 5. Build and Run Each Microfrontend
You can build and run each microfrontend individually:

```bash
npm run build
npm start
```

#### 6. Run the Main Application
After starting the individual microfrontends, run the **main application** to stitch them together:

```bash
npm start
```

### Running the Application
1. Ensure the **JSON Server** is running.
2. Start each microfrontend and the main app.
3. Open the browser at `http://localhost:9000` (or whichever port your main app is running on).
4. Open the browser at `http://localhost:9001/microfrontend1` (or whichever port your microfrontend app is running on).

### Folder Structure

Below is the simplified folder structure of the project:

```
/microfrontend-app/
│
├── /shared-css-package/
│   ├── /src/
│   │   ├── /global/
│   │   ├── /atoms/
│   │   ├── /molecules/
│   │   └── /organisms/
│   └── dist/
│
├── /microfrontend1/
│   ├── /src/
│   │   ├── /components/
│   │   ├── /atoms/
│   │   ├── /molecules/
│   │   ├── /organisms/
│   │   └── App.js
│   └── package.json
│
├── /main/
│   └── /src/
│       ├── App.js
│       └── /styles/
│
├── /server/
│   └── db.json
├── package.json
└── README.md
```

### Future Enhancements
- **State Management**: Integrate a state management library (like Redux or Context API) across the microfrontends.
- **API Integration**: Replace the JSON server with a real backend API.
- **Dynamic Module Federation**: Implement module federation to load microfrontends dynamically at runtime.
