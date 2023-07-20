import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  margin: auto;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > button {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-color: ${({ theme }) => theme.dark};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  box-sizing: border-box;
  &:focus {
    border-color: '#0d6efd';
  }
`;

export const Container = styled.div`
  margin: 1rem auto;
  padding: 1rem;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
`;
