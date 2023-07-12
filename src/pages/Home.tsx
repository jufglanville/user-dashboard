import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { TUser } from '../types';
import { deleteUser } from '../services/userService';
import { ScButton, ScContainer, ScTable, ScFlex } from '../styled/Styled';
import Spinner from '../components/Spinner';

const Home = () => {
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
    <ScContainer>
      {error && <p>{error.message}</p>}
      {users && (
        <>
          <ScTable>
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
                    <ScFlex>
                      <Link to={`/user/${user.id}`}>
                        <ScButton type="warning">Edit</ScButton>
                      </Link>
                      <ScButton
                        type="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Del
                      </ScButton>
                    </ScFlex>
                  </td>
                </tr>
              ))}
            </tbody>
          </ScTable>

          <ScContainer>
            <ScFlex>
              <ScButton type="primary">Download CSV</ScButton>
              <Link to="/user">
                <ScButton type="success">Add User</ScButton>
              </Link>
            </ScFlex>
          </ScContainer>
        </>
      )}
    </ScContainer>
  );
};

export default Home;
