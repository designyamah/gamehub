interface Props {
  children: any;
}

function Button({ children }: Props) {
  return <button>{children}</button>;
}

export default Button;
