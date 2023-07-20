import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styled/Global';
import ThemeContextProvider from './Context/ThemeContext.tsx';

import Error from './pages/Error';
import Home from './pages/Home';
import User from './pages/User';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>{' '}
      </ThemeContextProvider>
    </>
  );
}

export default App;
