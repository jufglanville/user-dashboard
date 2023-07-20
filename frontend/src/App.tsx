import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styled/Global.ts';
import ThemeContextProvider from './Context/ThemeContext.tsx';

import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';
import User from './pages/User.tsx';
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
