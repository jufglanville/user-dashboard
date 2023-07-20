import styled from 'styled-components';
import { TButton } from './Button';

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

export const Button = styled.button<{ $style: TButton }>`
  color: ${(props) => (props.$style === 'warning' ? '#212529' : '#fff')};
  background-color: ${(props) => colors[props.$style]};
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => hoverColors[props.$style]};
    box-shadow: 0px 0px 5px ${(props) => colors[props.$style]};
  }
`;
