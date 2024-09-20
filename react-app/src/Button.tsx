interface Props {
  children: string;
  color?: "primary" | "secondary";
  onclick: () => void;
}

const Button = ({ children, color = "primary", onclick }: Props) => {
  return (
    <button onClick={onclick} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
