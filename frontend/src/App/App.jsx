// frontend > src > App > App.jsx

import NotesPage from '../features/notes/NotesPage/NotesPage.jsx';
import LiveRegion from '../components/LiveRegion/LiveRegion.jsx';       
import styles from './App.module.css';

function App() {
  return (
    <main className="app text-center">
      <NotesPage />
      <LiveRegion />
    </main>
  )
}

export default App;
