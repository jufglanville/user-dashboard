import styled from 'styled-components';

export const Toggle = styled.div`
  width: 4rem;
  height: 2rem;
  background: ${({ theme }) => theme.light};
  border: 1px solid;
  border-color: ${({ theme }) => theme.dark};
  border-radius: 1.25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleBtn = styled.div<{ $toggle: boolean }>`
  background: ${({ theme }) => theme.dark};
  width: 1.75rem;
  height: 1.75rem;
  position: absolute;
  border-radius: 50%;
  border: none;
  transition: all 0.3s ease-in-out;
  transform: ${({ $toggle }) =>
    $toggle ? 'translateX(1rem)' : 'translateX(-1rem)'};
`;
