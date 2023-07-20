import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { TUser } from '../../types';
import { deleteUser } from '../../services/userService';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';

import * as Sc from './styles';

const UserTable = () => {
  const {
    data: users,
    loading,
    error,
    setData: setUsers,
    setError,
  } = useFetch<TUser[]>('http://localhost:3000/users', []);

  const handleDelete = async (id: string) => {
    const originalUsers = [...users];
    setUsers(users?.filter((user) => user.id !== id));

    try {
      await deleteUser(id);
    } catch (err) {
      setError(err as Error);
      setUsers(originalUsers);
    }
  };

  if (loading) return <Spinner />;

  return (
    <Sc.Container>
      {error && <p>{error.message}</p>}
      {users && (
        <>
          <Sc.Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Hobby</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.location}</td>
                  <td>{user.hobby}</td>
                  <td>
                    <Sc.Flex>
                      <Link to={`/user/${user.id}`}>
                        <Button style="warning">Edit</Button>
                      </Link>
                      <Button
                        style="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Del
                      </Button>
                    </Sc.Flex>
                  </td>
                </tr>
              ))}
            </tbody>
          </Sc.Table>

          <Sc.Container>
            <Sc.Flex>
              <Button style="primary">Download CSV</Button>
              <Link to="/user">
                <Button style="success">Add User</Button>
              </Link>
            </Sc.Flex>
          </Sc.Container>
        </>
      )}
    </Sc.Container>
  );
};

export default UserTable;
