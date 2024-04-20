import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Translate } from "../translate";

const LanguageMegaMenu = ({ textClass }) => {
  const { locale, locales, push, asPath } = useRouter();
  const { use: t } = Translate();

  const handleChange = (event) => {
    const locale =
      event.language == "English"
        ? "en"
        : event.language == "Korea"
        ? "kr"
        : event.language == "Japanese"
        ? "jp"
        : "chn";
    push(asPath, asPath, { locale: locale });
  };

  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = [
    { id: 1, language: "English", country: "English" },
    { id: 2, language: "Korea", country: "Korean" },
    { id: 3, language: "China", country: "Chinese" },
    { id: 4, language: "Japanese", country: "Japanese" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(languageContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    handleChange(item);
    setClick(false);
  };

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <Image
            width={30}
            height={30}
            src="/language.svg"
            alt="image"
            className="rounded-full mr-10 "
          />
          <span className="js-language-mainTitle">
            {selectedCurrency.country}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">{t.select_language}</div>
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
          </div>
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency.country === item.country ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.country}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LanguageMegaMenu;
