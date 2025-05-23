import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../Styles/Contacts.css";
import FullForm from "../Components/FullForm";

const Contacts = () => {
  const { lang, switchLanguage, translate } = useLanguage();
  return (
    <div className="contactsWrapper">
      <h1 className="contactsTitle">Contact Us</h1>
      <div className="contactsContainer">
        <div className="contacsMe">
          <div className="contactsSocialNetworks">
            <img src="img" alt="telegram" className="contactsSocialImg" />
            <img src="img" alt="vider" className="contactsSocialImg" />
            <img src="img" alt="instagram" className="contactsSocialImg" />
          </div>
          <div className="contactsStandart">
            <a href="tel:+380998765432" className="contactsStandartPhone">
              +380998765432
            </a>
            <a
              href="mailto:jekababchuk@gmail.com"
              className="contactsStandartPhone"
            >
              jekababchuk@gmail.com
            </a>
          </div>
          <div className="contactsPlaces">
            <div className="contactsPlace">
              <h3 className="contactsInfoTitle">Ружин</h3>
              <p className="contactsInfoAdress1">Ружинська гімназія</p>
              <p className="contactsInfosubAdress">
                графік тренувань можна знайти на вкладці
                <Link to="/schedule">Графік</Link>
              </p>
            </div>
            <div className="contactsPlace">
              <h3 className="contactsInfoTitle">Квітневе</h3>
              <p className="contactsInfoAdress1">Ружинська гімназія</p>
              <p className="contactsInfosubAdress">
                графік тренувань можна знайти на вкладці
                <Link to="/schedule">Графік</Link>
              </p>
            </div>
          </div>
        </div>
        <FullForm />
      </div>
      <div className="contactsMaps">
        {/* вставити як буде сеть */}
        гугл карти
      </div>
    </div>
  );
};

export default Contacts;
