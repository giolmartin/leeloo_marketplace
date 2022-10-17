import "./button.styles.scss";

const BUTTON_TYPES_CLASSNAMES = {
  google: "google-sign-in",
  inverted: "inverted",
  default: "default",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSNAMES[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
