import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../Styles/Schedule.css";

const Schedule = () => {
  const [card, setCard] = useState();

  const cardHandler = () => {
    console.log("click");
    setCard(!card);
  };

  const { lang, switchLanguage, translate } = useLanguage();
  const Kvitneve = () => {
    return (
      <div className="scheduleCard">
        <h3 className="scheduleCardTitle">Квітневе</h3>
      </div>
    );
  };
  return (
    <div className="scheduleWrapper">
      <h2 className="scheduleTitle">Розклад групових тренувань</h2>
      <div className="cardController">
        <button onClick={() => cardHandler()} className="cardController">
          Квітневе
        </button>
        <button onClick={() => cardHandler()} className="cardController">
          Ружин
        </button>
      </div>
      {card ? (
        Kvitneve
      ) : (
        <div className="scheduleCard">
          <h3 className="scheduleCardTitle">Ружин</h3>
        </div>
      )}
    </div>
  );
};

export default Schedule;
