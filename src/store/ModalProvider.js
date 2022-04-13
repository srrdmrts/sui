import { createContext, useEffect, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('modalOpened', isModalOpened);
    }, [isModalOpened]);

    return (
        <ModalContext.Provider value={{ isModalOpened, setIsModalOpened }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };
