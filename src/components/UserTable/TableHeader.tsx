import * as Sc from './styles';
import { TUser } from '../../types';

interface Props {
  active: boolean;
  sortRows: (key: keyof TUser) => void;
  sortKey: keyof TUser;
  sortDirection: 'asc' | 'desc';
  children: React.ReactNode;
}

const TableHeader = ({
  active,
  sortRows,
  sortKey,
  sortDirection,
  children,
}: Props) => {
  return (
    <th onClick={() => sortRows(sortKey)}>
      {children}
      {active && <Sc.SortIcon $direction={sortDirection} />}
    </th>
  );
};

export default TableHeader;
