import React, { useRef, useEffect } from 'react';
import { actions } from 'react-table';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(ref, callBack) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callBack();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

export { useOutsideClick };
