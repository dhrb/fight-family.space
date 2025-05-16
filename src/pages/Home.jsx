import { useLanguage } from "../context/LanguageContext";
import "../Styles/Home.css";

import heroBgImg from "./../assets/heroBgImg.jpg";
import disciplineCards1 from "./../assets/heroBgImg.jpg";
import calendarLinkImg from "./../assets/calendarIcon.png";
import chronometerImg from "./../assets/chronometerImg.png";
import contactImg from "./../assets/contactImg.png";
import placeholderImg from "./../assets/placeholderImg.png";
import mcgregorAboutUs from "./../assets/mcgregorAboutUs.jpg";

const Home = () => {
  const { translate } = useLanguage();
  return (
    <div className="homeWrapper">
      <div className="homeHeroWrapper">
        <img src={heroBgImg} alt="heroBgImg" className="heroBgImg" />
        <button className="heroContactBtn">
          {translate("home.heroButton")}
        </button>
        <p className="heroTitle">{translate("home.heroTitle ")}</p>
      </div>

      <div className="mainInfoWrapper">
        <div className="mainInfoItem">
          <p className="mainInfoTitle">mainInfoTitle</p>
          <p className="mainInfoSubtitle">mainInfoSubtitle</p>
          <img src={contactImg} alt="" className="mainInfoImg" />
        </div>
        <div className="mainInfoItem">
          <p className="mainInfoTitle">mainInfoTitle</p>
          <p className="mainInfoSubtitle">mainInfoSubtitle</p>
          <img src={chronometerImg} alt="" className="mainInfoImg" />
        </div>
        <div className="mainInfoItem">
          <p className="mainInfoTitle">mainInfoTitle</p>
          <p className="mainInfoSubtitle">mainInfoSubtitle</p>
          <img src={placeholderImg} alt="" className="mainInfoImg" />
        </div>
      </div>
      <div className="homeDisciplinesWrapper">
        <h1 className="homeDisciplinesTitle">dyscypliny</h1>
        <div className="disciplinesCards">
          <div className="disciplineCardsItem">
            <img
              src={disciplineCards1}
              alt=""
              className="disciplinesCardsItemImg"
            />
            <a href="/schedule" className="disciplineCardsCalendarLink">
              <img src={calendarLinkImg} alt="" className="calendarLinkImg" />
            </a>
            <p className="disciplinesCardsTitle">
              disciplinesCards grupa dytacha
            </p>
            <p className="disciplinesCardsTitle">
              disciplinesCards subtitle graphic
            </p>
          </div>
          <div className="disciplineCardsItem">
            <img
              src={disciplineCards1}
              alt=""
              className="disciplinesCardsItemImg"
            />
            <a href="/schedule" className="disciplineCardsCalendarLink">
              <img src={calendarLinkImg} alt="" className="calendarLinkImg" />
            </a>
            <p className="disciplinesCardsTitle">
              disciplinesCards pidrostkova
            </p>
            <p className="disciplinesCardsTitle">
              disciplinesCards subtitle graphic
            </p>
          </div>
          <div className="disciplineCardsItem">
            <img
              src={disciplineCards1}
              alt=""
              className="disciplinesCardsItemImg"
            />
            <a href="/schedule" className="disciplineCardsCalendarLink">
              <img src={calendarLinkImg} alt="" className="calendarLinkImg" />
            </a>
            <p className="disciplinesCardsTitle">disciplinesCards personal</p>
            <p className="disciplinesCardsTitle">
              disciplinesCards subtitle graphic
            </p>
          </div>
        </div>
      </div>
      <div className="homeAboutUsWrapper">
        <div className="homeAboutUsSide">
          <img src={mcgregorAboutUs} alt="" className="homeAboutUsSideImg" />
        </div>
        <div className="homeAboutUsMain">
          <h1 className="homeAboutUsMainTitle">About us title</h1>
          <p className="homeAboutUsMainSubtitle">About us subtitle</p>
          <p className="homeAboutUsMainBenefits">About us Benefits</p>
          <li className="homeAboutUsList">
            <li className="homeAboutUsListItem">ММА</li>
            <li className="homeAboutUsListItem">сила</li>
            <li className="homeAboutUsListItem">Мощь</li>
            <li className="homeAboutUsListItem">дух</li>
          </li>
          <h3 className="homeAboutUsTrainer">Жека Бабчук</h3>
          <p className="homeAboutUsTrainerTitle">Тренер/Засновник</p>
        </div>
      </div>
      <div className="homeBlogWrapper">
        <div className="homeBlogCards">
          <div className="homeBlogCardItem">
            <img src="" alt="" className="homeBlogCardImg" />
            <p className="homeBlogCardDate">25/04/2025</p>
            <h3 className="homeBlogCardTitle">
              Почесне 1 місце в українських змаганнях
            </h3>
            <p className="homeBlogCardSubtitle">
              лорем іпсум долор сіт амет бла бла бла бла бла бла бла бла бла бла
              бла бла бла бла бла бла бла бла бла бла
            </p>
          </div>
          <div className="homeBlogCardItem">
            <img src="" alt="" className="homeBlogCardImg" />
            <p className="homeBlogCardDate">25/04/2025</p>
            <h3 className="homeBlogCardTitle">
              Почесне 1 місце в українських змаганнях
            </h3>
            <p className="homeBlogCardSubtitle">
              лорем іпсум долор сіт амет бла бла бла бла бла бла бла бла бла бла
              бла бла бла бла бла бла бла бла бла бла
            </p>
          </div>
          <div className="homeBlogCardItem">
            <img src="" alt="" className="homeBlogCardImg" />
            <p className="homeBlogCardDate">25/04/2025</p>
            <h3 className="homeBlogCardTitle">
              Почесне 1 місце в українських змаганнях
            </h3>
            <p className="homeBlogCardSubtitle">
              лорем іпсум долор сіт амет бла бла бла бла бла бла бла бла бла бла
              бла бла бла бла бла бла бла бла бла бла
            </p>
          </div>
        </div>
      </div>
      <div className="homeContactFormWrapper">
        <form action="homeContactForm">
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
          <button className="homeContactFormBtn"></button>
        </form>
      </div>
    </div>
  );
};

export default Home;
