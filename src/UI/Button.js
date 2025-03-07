function Button({ className, btnText, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default Button;
