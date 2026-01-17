// frontend / src / utils / validateNoteContent.js

import { LENGTHS } from '../constants';

/**
 * Validates note content.
 * @param {string} content
 * @param {string} [originalContent] - Optional: used to detect if content is unchanged
 * @returns {{
 * trimmedContent: string,
 * contentLength: number,
 * isLengthValid: boolean,
 * isUnchanged: boolean,
 * isValid: boolean,
 * isNearMaxLength: boolean
 * }}
 */

const validateNoteContent = (content, originalContent = '') => {
    const trimmedContent = content.trim();
    const contentLength = content.length;

    const isLengthValid =
      contentLength >= LENGTHS.MIN && contentLength <=LENGTHS.MAX;

    const isUnchanged = originalContent !== undefined && content === originalContent;
    const isNearMaxLength = contentLength >= LENGTHS.WARNING_THRESHOLD;

    const isValid = isLengthValid && !isUnchanged;

    return {
        trimmedContent,
        contentLength,
        isLengthValid,
        isUnchanged,
        isNearMaxLength,
        isValid,
    };
};

export default validateNoteContent;


// 1. The originalContent Mismatch
// In your comment: You marked it as optional using brackets: [originalContent]. 
// In JSDoc, this implies the value could be undefined.
// In your code: You provided a default value: originalContent = ''.
// The Conflict: Your code logic checks originalContent !== undefined. 
// Because of your default value, originalContent will never be undefined inside the function body; 
// it will at least be an empty string.
// The Fix: If you want to detect if the content is "unchanged," 
// you should check if the new content matches the old content. 
// Comparing against an empty string by default might flag a new note 
// as "unchanged" if the user hasn't typed anything yet.