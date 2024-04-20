import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { Translate } from "../../translate";
import Link from "next/link";
import axiosInstance from "../../../axios/axios";
import { useEffect, useState } from "react";

const Index = ({ data }) => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const t = Translate().use;
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    axiosInstance
      .get(
        "https://emt.tanuweb.cloud/api/v1/carousel/65e30f445654437444651e0f"
      )
      .then((res) => setPhoto(res.data.data));
  });

  return (
    <section className="masthead -type-2 z-2">
      <div className="masthead__bg bg-dark-3">
        <img alt="image" src="/img/masthead/2/bg.png" className="js-lazy" />
      </div>
      {/* End bg image */}
      <div className="container">
        <div className="masthead__tabs">
          <div
            className="tabs -bookmark-2 js-tabs"
            style={{
              background: "white",
              color: "black",
              borderRadius: "12px",
            }}
          >
            <div
              className="tabs__controls d-flex items-center js-tabs-controls"
              style={{ borderRadius: "28px" }}
            >
              <Link
                href={"/"}
                className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-black js-tabs-button `}
              >
                {/* <i className={`text-20 mr-10 sm:mr-5`}></i> */}
                {t.home}
              </Link>
              <Link
                href={"/tour/tour-list-v3"}
                className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-black js-tabs-button `}
                onClick={() => { }}
              >
                {/* <i className={`text-20 mr-10 sm:mr-5`}></i> */}
                {t.travel_name}
              </Link>
              <Link
                href={"/blog/blog-list-v1"}
                className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-black js-tabs-button `}
                onClick={() => { }}
              >
                {/* <i className={`text-20 mr-10 sm:mr-5`}></i> */}
                {t.news}
              </Link>
              <Link
                href={"/others-pages/about"}
                className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-black js-tabs-button `}
                onClick={() => { }}
              >
                {/* <i className={`text-20 mr-10 sm:mr-5`}></i> */}
                {t.about}
              </Link>
            </div>
          </div>
          {/* End tabs */}
        </div>
        {/* End .masthead__tabs */}

        <div className="masthead__content">
          <div className="row y-gap-40">
            <div className="col-xl-5" data-aos="fade-up" data-aos-offset="0">
              <h1 className="z-2 text-60 lg:text-40 md:text-30 text-white pt-80 xl:pt-0">
                <span className="text-yellow-1">Arvai Tour</span>
                <br />
              </h1>
              <p className="z-2 text-white mt-20">{t.hero_text}</p>
              {/* End filter content */}
            </div>
            {/* End .col */}

            <div className="col-xl-7">
              <div className="masthead__images relative-1">
                <div data-aos="fade" data-aos-delay="400">
                  <img src="/home3.jpg" alt="image" className="js-mouse-move" />
                </div>

                <div data-aos="fade" data-aos-delay="600">
                  <img
                    src={`https://emt.tanuweb.cloud/uploads/${photo?.photo1}`}
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>

                <div data-aos="fade" data-aos-delay="800">
                  <img
                    src={`https://emt.tanuweb.cloud/uploads/${photo?.photo2}`}
                    alt="image"
                    className="js-mouse-move"
                  />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__content */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;
