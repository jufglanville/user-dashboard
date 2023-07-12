import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const bodyColors = {
  primary: '#212529',
  secondary: '#6c757d',
  light: '#f8f9fa',
  dark: '#343a40',
};

const colors = {
  primary: '#0d6efd',
  warning: '#ffc107',
  danger: '#dc3545',
  success: '#12AC3F',
  info: '#AE1DC5',
};

const hoverColors = {
  primary: '#0B4C8C',
  warning: '#FFA000',
  danger: '#C82333',
  success: '#0B8C2B',
  info: '#8C1D9B',
};

export type TButton = 'primary' | 'warning' | 'danger' | 'success' | 'info';

export const ScButton = styled.button<{ type: TButton }>`
  color: ${(props) => (props.type === 'warning' ? bodyColors.primary : '#fff')};
  background-color: ${(props) => colors[props.type]};
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => hoverColors[props.type]};
    box-shadow: 0px 0px 5px ${(props) => colors[props.type]};
  }
`;

export const ScHeading = styled.h1`
  color: ${bodyColors.primary};
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const ScSubHeading = styled.h2`
  color: ${bodyColors.primary};
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const ScLink = styled(NavLink)`
  color: ${bodyColors.primary};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${bodyColors.light};
    text-decoration: underline;
  }

  &.active {
    color: ${bodyColors.light};
    text-decoration: underline;
    cursor: default;
  }
`;

export const ScContainer = styled.div`
  margin: 1rem auto;
  padding: 1rem;
`;

export const ScFlex = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const ScTable = styled.table`
  width: 100%;
  tr {
    height: 3rem;
    border: 1px solid #ddd;
    &:nth-child(even) {
      background-color: #e7e9eb;
    }
  }
  thead {
    background-color: ${bodyColors.dark};
    color: ${bodyColors.light};
    font-weight: 600;
  }
  th,
  td {
    padding: 0.5rem;
    vertical-align: middle;
  }
`;

export const ScInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  &:focus {
    border-color: ${colors.primary};
  }
`;

export const ScForm = styled.form`
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
