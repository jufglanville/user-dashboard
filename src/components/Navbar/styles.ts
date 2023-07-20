import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
  padding: 1rem;

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.light};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.light};
    text-decoration: underline;
  }

  &.active {
    color: ${({ theme }) => theme.light};
    text-decoration: underline;
    cursor: default;
  }
`;

export const Flex = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 1rem;
`;
