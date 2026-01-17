// frontend / src / features / notes / context / NotesContext.js
// This file is "container for data"

import { createContext, useContext } from 'react';
// This line imports the two essential building blocks 
// from the React library needed to manage global state: 
// createContext is used to initialize the "container" 
// where your notes data will live, while useContext 
// is the hook that allows child components to tap into 
// that container and consume the data.

import { ERROR_MESSAGES } from '../../../constants';

const NotesContext = createContext(null); // Container for the data

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error(ERROR_MESSAGES.CONTEXT.NOTES);
    }
    return context;
};

export default NotesContext;