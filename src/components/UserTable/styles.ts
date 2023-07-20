import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  padding: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  tr {
    height: 3rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.dark};
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.lighter};
    }
    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.light};
    }
  }
  thead tr {
    background-color: ${({ theme }) => theme.dark} !important;
    color: ${({ theme }) => theme.light};
    font-weight: 600;
  }
  th,
  td {
    padding: 0.5rem;
    vertical-align: middle;
  }
`;
