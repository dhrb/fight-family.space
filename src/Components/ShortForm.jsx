import "../Styles/FormsStyles.css";

function FormToBot() {
  return (
    <div className="shortFormWrapper">
      <h3 className="shortFormTitle">Швидкий запис</h3>
      <form action="shortFormContainer">
        <input
          className="homeContactFormInput"
          type="text"
          placeholder="+380 - XXX - XX - XX"
        />
        <input
          className="homeContactFormInput"
          type="text"
          placeholder="Твоє імя та прізвище"
        />
        <button className="homeContactFormBtn">Send</button>
      </form>
    </div>
  );
}

export default FormToBot;
