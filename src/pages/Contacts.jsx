import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Contacts = () => {
  const { lang, switchLanguage, translate } = useLanguage();
  return <div className="p-4"> page content</div>;
};

export default Contacts;
