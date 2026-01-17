# 📝 Full-Stack Notes Manager

<p>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18.17.0-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-4.18.2-05339C?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-6.0.0-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
</p>


Create, delete, and edit notes with a full-stack notes management application built with **React**, **Express**, **Node.js**, and **MongoDB**.

It is organized as a monorepo using **Yarn Workspaces** and features clean architecture, standardized error handling, custom React hooks, and responsive styling with Bootstrap.

---

## 📁 Project Structure

```
fullstack-notes-manager/
├── backend
│   ├── config
│   │   └── apiConfig.js
│   ├── controllers
│   │   ├── createNote.js
│   │   ├── deleteNote.js
│   │   ├── getNotes.js
│   │   └── updateNote.js
│   ├── helpers
│   │   └── sendResponse.js
│   ├── index.js
│   ├── middleware
│   │   └── errorHandler.js
│   ├── models
│   │   └── Note.js
│   └── routes
│       └── notes.js
└── frontend
    ├── public
    │   └── index.html
    └── src
        ├── App.js
        ├── components
        │   ├── AppLoader.js
        │   ├── ErrorBoundary.js
        │   └── Spinner.js
        ├── constants
        │   ├── apiRoutes.js
        │   ├── index.js
        │   ├── limits.js
        │   ├── messages.js
        │   └── timeouts.js
        ├── features
        │   └── notes
        │       ├── components
        │       │   ├── AccessibilityAlertRegion.js
        │       │   ├── CharacterCounter.js
        │       │   ├── Note.js
        │       │   ├── NoteForm.js
        │       │   └── NoteList.js
        │       ├── context
        │       │   ├── NotesContext.js
        │       │   └── NotesProvider.js
        │       ├── hooks
        │       │   ├── index.js
        │       │   ├── useApiRequest.js
        │       │   ├── useNoteActions.js
        │       │   └── useNoteContent.js
        │       └── NotesApp.js
        ├── hooks
        │   ├── index.js
        │   └── useErrorHandler.js
        ├── index.js
        ├── providers
        │   └── AppProviders.js
        └── utils
            ├── apiConfig.js
            ├── errorHandler.js
            ├── parseError.js
            └── validateNoteContent.js
```

---

## 🚀 Step-by-Step How to Start the Notes Manager:

### Prerequisites:
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/) (or your editor of choice)  
- [Git](https://git-scm.com/) (for cloning the repository)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (for cloud-based database – free tier available)  
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/) (This project uses Yarn Workspaces for managing the front- and backend in a monorepo structure. Using yarn instead of npm is strongly recommended to ensure dependencies are properly linked.)

### Repository:
- Install [Git](https://git-scm.com/)
- Clone the repository:
  ```bash
  git clone https://github.com/BorisPlotnikov/full-stack-notes-manager.git
  cd full-stack-notes-manager
  ```

### Dependencies:
- Install [Yarn](https://classic.yarnpkg.com/) (v1.22+)
- Install project's dependencies:
  ```bash
  yarn install
  ```

### Database:
- Follow the instructions to create free account and set up a database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to store your notes.

### Environment variables:  
- Change names of `.env.Example` files to `.env` in both `backend/` and `frontend/`:
     ```bash
     mv backend/.env.Example backend/.env
     ```  
     ```bash
     mv frontend/.env.Example frontend/.env
     ```
  
- After changing the names open `backend/.env` and replace the placeholders `<username>`, `<password>`, and `<dbname>` with your actual MongoDB credentials in the MongoDB URI:  
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     ```  

### Launch: 
- Both, back- and frontend will start from a single command:
  ```bash
  yarn dev
  ```

> The frontend automatically proxies API calls to the backend.

---

## 🧠 Tech Stack

### Backend

- **Node.js + Express**
- **MongoDB + Mongoose**
- **dotenv**, **create-http-error**
- Custom middleware: \`errorHandler\`
- Helper utilities: \`sendResponse\`, \`apiConfig\`
- RESTful routes: \`createNote\`, \`getNotes\`, \`updateNote\`, \`deleteNote\`

### Frontend

- **React (Functional Components + Hooks)**
- Custom hooks: \`useApiRequest\`, \`useNoteActions\`, \`useNoteContent\`, \`useErrorHandler\`
- Context: \`NotesContext\`, \`NotesProvider\`, \`AppProviders\`
- Axios + error handling abstraction
- Bootstrap for responsive UI
- Additional tools: \`pluralize\`, \`safeStringify\`, \`prop-types\`

---

## 🖼️ UI Components

- \`Note\`, \`NoteList\`, \`NoteForm\`
- \`CharacterCounter\`, \`Spinner\`, \`AppLoader\`
- \`AccessibilityAlertRegion\`
- \`ErrorBoundary\`

---

## 💻 Scripts

From the root:

| Command                         | Description                         |
|----------------------------------|-------------------------------------|
| \`yarn dev\`                     | Run both frontend & backend         |
| \`yarn lint\`                    | Run ESLint across the monorepo      |
| \`yarn build\`                   | Build both frontend and backend     |
| \`yarn workspace frontend start\` | Run frontend only                   |
| \`yarn workspace backend dev\`    | Run backend with nodemon            |

---

## 📦 Features

- Monorepo architecture with Yarn Workspaces
- Fully async/await-based backend
- REST API with Mongoose models
- Frontend state management with React Context
- Robust error handling on both ends
- Custom hooks for API and state logic
- Responsive and accessible UI
- Configurable via \`.env\` files
- Clean and modular code organization
- Barrel file imports for clarity

---

## 🧪 Testing

Tests can be added using:

- **Jest** or **React Testing Library** (frontend)
- **Supertest** or **Mocha/Chai** (backend)

_(Currently not included in this starter project)_

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) © 2025 [Boris Plotnikov](https://github.com/BorisPlotnikov)

---

## 🤝 Contributing

Contributions, suggestions, and issues are welcome!  
Please open an issue or submit a PR.

---

## 🌐 Deployment

Deployment instructions can be added for services like:

- **Render**, **Heroku**, **Vercel**, or **Netlify**
- Dockerize both frontend and backend
- MongoDB Atlas for production DB

_(Not yet included in this version)_

---

## 📬 Contact

Have feedback or want to connect?

- GitHub: [@BorisPlotnikov](https://github.com/BorisPlotnikov)
- Issues: [Open an issue](https://github.com/BorisPlotnikov/fullstack-notes-manager/issues)

---

## 🧹 Todo / Improvements

- [ ] Add unit and integration tests
- [ ] Add CI workflow (GitHub Actions)
- [ ] Add Docker support
- [ ] Improve accessibility
- [ ] Optimize performance for large note sets
