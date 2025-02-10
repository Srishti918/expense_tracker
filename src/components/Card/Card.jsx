import "./Card.css";

export default function Card({
  title,
  money,
  buttonText,
  buttonType,
  handleClick,
  success = true,
}) {
  return (
    <div className="card">
      <h3 className="title">
        {`${title}: `}
        <span className={success ? "success1" : "failure1"}>{`₹${money}`}</span>
      </h3>
      <button
        type="button"
        onClick={handleClick}
        className={`button ${buttonType}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
