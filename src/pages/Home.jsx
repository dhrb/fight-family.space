import { useLanguage } from "../context/LanguageContext";
import "../Styles/Home.css";

import ShortForm from "../Components/ShortForm";
import FullForm from "../Components/FullForm";

import heroBgImg from "./../assets/heroBgImg.jpg";
import disciplineCards1 from "./../assets/heroBgImg.jpg";
import calendarLinkImg from "./../assets/calendarIcon.png";
import chronometerImg from "./../assets/chronometerImg.png";
import contactImg from "./../assets/contactImg.png";
import placeholderImg from "./../assets/placeholderImg.png";
import mcgregorAboutUs from "./../assets/mcgregorAboutUs.jpg";
import arrow from "../assets/arrow.png";
//must parsed anywhere to page
import blogImg from "../assets/mcgregorAboutUs.jpg";

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
      <ShortForm />

      <div className="homeAboutUsWrapper">
        <div className="homeAboutUsSide">
          <img src={mcgregorAboutUs} alt="" className="homeAboutUsSideImg" />
        </div>
        <div className="homeAboutUsMain">
          <div className="homeAboutUsMainInfo">
            <h1 className="homeAboutUsMainTitle">About us title</h1>
            <p className="homeAboutUsMainSubtitle">About us subtitle</p>
            <div className="homeAboutUsMainBenefits">
              <p className="homeAboutUsMainBenefitsTitle">About us Benefits</p>
              <ul className="homeAboutUsList">
                <li className="homeAboutUsListItem">ММА</li>
                <li className="homeAboutUsListItem">сила</li>
                <li className="homeAboutUsListItem">Мощь</li>
                <li className="homeAboutUsListItem">дух</li>
              </ul>
            </div>
          </div>
          <div className="homeAboutUsMainCoach">
            <h3 className="homeAboutTrainer">Жека Бабчук</h3>
            <p className="homeAboutUsTrainerTitle">Тренер/Засновник</p>
          </div>
        </div>
      </div>
      <div className="homeBlogWrapper">
        <h1 className="homeBlogTitle">Our Blog</h1>
        <div className="homeBlogCards">
          <div className="homeBlogCardItem">
            <img src={blogImg} alt="" className="homeBlogCardImg" />
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
            <img src={blogImg} alt="" className="homeBlogCardImg" />
            <p className="homeBlogCardDate">25/04/2025</p>
            <div className="homeBlogCardText">
              <h3 className="homeBlogCardTitle">
                Почесне 1 місце в українських змаганнях
              </h3>
              <p className="homeBlogCardSubtitle">
                лорем іпсум долор сіт амет бла бла бла бла бла бла бла бла бла
                бла бла бла бла бла бла бла бла бла бла бла
              </p>
            </div>
          </div>
          <div className="homeBlogCardItem">
            <img src={blogImg} alt="" className="homeBlogCardImg" />
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
      <div className="homeMapsContainer">
        {/* вставить как будет сеть и скопировать в контакты либо наоборот */}
      </div>
      <div className="homeFeedbackContainer">
        <h3 className="feedbackTitle">Відгуки про мою роботу</h3>
        <div className="feedbackCards">
          <img src={arrow} alt="arrow" className="feedbackArrow" />
          <div className="feedbackCard">
            <img src="" alt="" className="feedbackCardImg" />
            <img src="" alt="" className="feedbackCardImg" />
            <img src="" alt="" className="feedbackCardImg" />
          </div>
        </div>
        <img src={arrow} alt="arrow" className="feedbackArrow" />
      </div>
      <FullForm />
    </div>
  );
};

export default Home;
