import styled from 'styled-components';
import { useContext } from 'react';
import { ToggleContext } from '../Context/ToggleContext';

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ToggleContext);

  return (
    <ScToggle>
      <ScToggleBtn $toggle={darkMode} onClick={() => setDarkMode()} />
    </ScToggle>
  );
};

const ScToggle = styled.div`
  width: 4rem;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 1.25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScToggleBtn = styled.button<{ $toggle: boolean }>`
  background: white;
  width: 1.75rem;
  height: 1.75rem;
  position: absolute;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: ${({ $toggle }) =>
    $toggle ? 'translateX(1rem)' : 'translateX(-1rem)'};
`;

export default Toggle;
