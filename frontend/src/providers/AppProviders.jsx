// frontend > src > providers > AppProviders.jsx

import NotesProvider from '../features/notes/context/NotesProvider.jsx';
import PropTypes from 'prop-types';

const AppProviders = ({ children }) => (
    <NotesProvider>
        {children}
    </NotesProvider>
);

AppProviders.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProviders;