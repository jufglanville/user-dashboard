import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { TUser } from '../../types';
import { deleteUser } from '../../services/userService';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';

import * as Sc from './styles';
import TableHeader from './TableHeader';

const UserTable = () => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [sortKey, setSortKey] = useState<keyof TUser | null>(null);
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

  const sortRows = (key: keyof TUser): void => {
    let sortOrder: 'asc' | 'desc';

    if (sortKey === key) {
      sortOrder = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('desc');
      sortOrder = 'desc';
    }

    const sortedUsers = [...users].sort((a: TUser, b: TUser) => {
      if (sortOrder === 'asc') {
        return a[key] > b[key] ? -1 : 1;
      }
      return a[key] < b[key] ? -1 : 1;
    });

    setUsers(sortedUsers);
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
                <TableHeader
                  active={sortKey === 'id'}
                  sortRows={sortRows}
                  sortKey="id"
                  sortDirection={sortDirection}
                >
                  ID
                </TableHeader>
                <TableHeader
                  active={sortKey === 'firstname'}
                  sortRows={sortRows}
                  sortKey="firstname"
                  sortDirection={sortDirection}
                >
                  First
                </TableHeader>
                <TableHeader
                  active={sortKey === 'lastname'}
                  sortRows={sortRows}
                  sortKey="lastname"
                  sortDirection={sortDirection}
                >
                  Last
                </TableHeader>
                <TableHeader
                  active={sortKey === 'email'}
                  sortRows={sortRows}
                  sortKey="email"
                  sortDirection={sortDirection}
                >
                  Email
                </TableHeader>
                <TableHeader
                  active={sortKey === 'phone'}
                  sortRows={sortRows}
                  sortKey="phone"
                  sortDirection={sortDirection}
                >
                  Phone
                </TableHeader>
                <TableHeader
                  active={sortKey === 'location'}
                  sortRows={sortRows}
                  sortKey="location"
                  sortDirection={sortDirection}
                >
                  Location
                </TableHeader>
                <TableHeader
                  active={sortKey === 'hobby'}
                  sortRows={sortRows}
                  sortKey="hobby"
                  sortDirection={sortDirection}
                >
                  Hobby
                </TableHeader>
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
