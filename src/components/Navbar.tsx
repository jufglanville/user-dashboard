import styled from 'styled-components';
import { ScHeading, ScLink } from '../styled/Styled';
import Toggle from './Toggle';

const Navbar = () => {
  return (
    <ScNav>
      <ScHeading>CRUD Database</ScHeading>
      <Toggle />
      <ul>
        <li>
          <ScLink to="/">Home</ScLink>
        </li>
        <li>
          <ScLink to="user">Add New User</ScLink>
        </li>
      </ul>
    </ScNav>
  );
};

const ScNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c3c3c3;
  padding: 1rem;

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`;

export default Navbar;
