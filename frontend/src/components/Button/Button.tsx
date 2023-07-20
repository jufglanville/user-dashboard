import * as Sc from './styles';

export type TButton = 'primary' | 'warning' | 'danger' | 'success' | 'info';

type Props = {
  children: React.ReactNode;
  style: TButton;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({ children, style, type = 'button', onClick }: Props) => {
  return (
    <Sc.Button $style={style} type={type} onClick={onClick}>
      {children}
    </Sc.Button>
  );
};

export default Button;
