interface IProps {
  message?: string;
}

const Hello: React.FC<IProps & React.PropsWithChildren> = (props) => {
  console.log(props.children);
  return <h2>{props.message}</h2>;
};

Hello.defaultProps = {
  message: "Hello World",
};
export default Hello;
