import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { lang, switchLanguage, translate } = useLanguage();
  return <div className="p-4">page content</div>;
};

export default About;
