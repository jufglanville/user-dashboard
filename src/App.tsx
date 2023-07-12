import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styled/Global';
import ToggleProvider from './Context/ToggleContext.tsx';

import Error from './pages/Error';
import Home from './pages/Home';
import User from './pages/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <ToggleProvider>
        <ThemeProvider theme={{}}>
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </ToggleProvider>
    </>
  );
}

export default App;
