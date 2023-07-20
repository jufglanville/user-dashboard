import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import * as Sc from './styles';

const Toggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Sc.Toggle onClick={() => toggleTheme()}>
      <Sc.ToggleBtn $toggle={darkTheme} />
    </Sc.Toggle>
  );
};

export default Toggle;
