// frontend / src / App / App.jsx

import { useContext } from 'react';
import NotesContext from '../features/notes/context/NotesContext.js';
import LiveRegion from '../components/LiveRegion/LiveRegion.jsx';
import NotesPage from '../features/notes/NotesPage/NotesPage.jsx';
import styles from './App.module.css';

function App() {

  const { loading } = useContext(NotesContext);

  return (
    <main className="text-center">
      <NotesPage />
      <LiveRegion loading = {loading} />
    </main>
  )
}

export default App;
