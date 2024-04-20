import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Translate } from "../translate";
import Image from "next/image";
const CurrenctyMegaMenu = ({ textClass }) => {
  const t = Translate().use;
  const [currency, setCurrency] = useState([]);
  const fetchCurrency = useCallback(() => {
    axios
      .get(
        "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|KRW|JPY|INR|AUD|CNY"
      )
      .then((res) => setCurrency(res.data));
  }, []);
  useEffect(() => {
    fetchCurrency();
  }, []);
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const currencyContent = [
    { id: 1, name: "1USD = 2MNT", currency: "USD", symbol: "$" },
    { id: 2, name: "Australian dollar", currency: "AUD", symbol: "$" },
    { id: 3, name: "Brazilian real", currency: "BRL", symbol: "R$" },
    { id: 4, name: "Bulgarian lev", currency: "BGN", symbol: "лв." },
    { id: 5, name: "Canadian dollar", currency: "CAD", symbol: "$" },
    { id: 6, name: "Bangladeshi Taka", currency: "BDT", symbol: "৳" },
    { id: 7, name: "Azerbaijan Manat", currency: "AZN", symbol: "₼" },
    { id: 8, name: "Colombia Peso", currency: "COP", symbol: "$" },
    { id: 9, name: "Oman Rial", currency: "OMR", symbol: "﷼" },
    { id: 10, name: "India Rupee", currency: "INR", symbol: "₹" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencyContent[0]);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
  };

  return (
    <>
      {/* Start currencty dropdown wrapper */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-currencyMenu-mainTitle ">
            <Image
              width={30}
              height={30}
              src="/currency1.svg"
              alt="image"
              className="rounded-full mr-10 "
            />
            {t.currency}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-10" />
        </button>
      </div>
      {/* End currencty dropdown wrapper */}

      <div
        className={`currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`}
      >
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="currencyMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">{t.currency}</div>
            {/* End Title */}

            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* End flex wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {currency.map((item, index) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency.currency === item.currency ? "active" : ""
                }`}
                key={item.name}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.name}
                  </div>
                  <div className="text-14 lh-15 mt-5">
                    <span className="js-title">
                      1 {item.code} --- {item?.rate} MNT
                    </span>{" "}
                    {item.symbol}
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

export default CurrenctyMegaMenu;
