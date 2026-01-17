// frontend / src / features / notes / NotesPage / NotesPage.jsx

import { Container, Row, Col } from 'react-bootstrap';
import NoteCreator from '../components/NoteCreator/NoteCreator.jsx';
import NotesGallery from '../components/NotesGallery/NotesGallery.jsx';
import AppLoader from '../../../components/AppLoader/AppLoader.jsx';
import { useNotes } from '../context/NotesContext.js';
import styles from './NotesPage.module.css';

const NotesPage = () => {
    const { isInitialized } = useNotes();

    return (
        <Container className="py-4">
            <Row className="mt-5 mb-4">
                <Col>
                    <div className="text-center border-bottom pb-2 mb-4">
                        <h1 className="fw-bold display-5">📝 Notes</h1>
                    </div>
                </Col>
            </Row>
            
            <Row className="mb-4">
                <Col>
                    <NoteCreator />
                </Col>
            </Row>

            <Row>
                <Col>
                    <NotesGallery />
                    {!isInitialized ? <AppLoader /> : <NotesGallery />}
                </Col>
            </Row>
        </Container>

    );
};

export default NotesPage;
