import Toggle from '../Toggle/Toggle';

import * as Sc from './styles';

const Navbar = () => {
  return (
    <Sc.Container>
      <Sc.Heading>CRUD Database</Sc.Heading>
      <Sc.Flex>
        <nav>
          <ul>
            <li>
              <Sc.Link to="/">Home</Sc.Link>
            </li>
            <li>
              <Sc.Link to="user">Add New User</Sc.Link>
            </li>
          </ul>
        </nav>
        <Toggle />
      </Sc.Flex>
    </Sc.Container>
  );
};

export default Navbar;
