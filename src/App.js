import 'normalize.css';
import { Layout } from './components';
import useDarkMode from 'use-dark-mode';
/* import 'focus-within-polyfill';
import 'focus-visible'; */
import './styles/index.scss';
import { ModalProvider } from './store/ModalProvider';

function App() {
    const darkMode = useDarkMode(true, {
        classNameDark: 'dark',
        classNameLight: 'light'
    });

    return (
        <ModalProvider>
            <Layout darkMode={darkMode} />
        </ModalProvider>
    );
}

export default App;
