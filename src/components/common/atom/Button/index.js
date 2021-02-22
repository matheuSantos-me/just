import "./styles.css";

const Button = (props) => {
  return (
    <div className="container-button" onClick={props.onClick}>
      <p className="text-button">{props.text}</p>
    </div>
  );
};

export { Button };
