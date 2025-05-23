import { useEffect, useState } from "react";
import "../Styles/FormsStyles.css";

function FullForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const nameHandler = (text) => {
    console.log(text.target.value);
    setName(text.value);
  };
  const phoneHandler = (text) => {
    console.log(text.target.value);
    setPhone(text.value);
  };
  const emailHandler = (text) => {
    console.log(text.target.value);
    setEmail(text.value);
  };
  const typeHandler = (text) => {
    console.log(text.target.value);
    setType(text.value);
  };

  const formHandler = (data) => {
    preventDefault();
    console.log(data);
  };
  return (
    <div className="fullformWrapper">
      <h3 className="fullformTitle">Запишись на тренування онлайн</h3>
      <form action="send" className="fullformContainer">
        <input
          onChange={(text) => nameHandler(text)}
          type="text"
          className="fullformInput"
          placeholder="Your name and surname"
          value={name}
          required
        />
        <input type="text" className="fullformInput" placeholder="Your email" />
        <input
          type="text"
          className="fullformInput"
          placeholder="Your phone"
          required
        />

        <p className="trainingSelectType">Вибери тип тренування:</p>
        <select name="trainingSelect" className="fullformSelector">
          <option value="childGroup" className="trainingSelectOption">
            childGroup
          </option>
          <option value="adultGroup" className="trainingSelectOption">
            adultGroup
          </option>
          <option value="personalTraining" className="trainingSelectOption">
            personalTraining
          </option>
        </select>
        <button type="submit" className="fullformBtn">
          Send
        </button>
      </form>
    </div>
  );
}

export default FullForm;
