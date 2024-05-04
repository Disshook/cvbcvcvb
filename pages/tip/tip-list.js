import React from "react";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import LocationTopBar from "../../components/common/LocationTopBar";
import DefaultFooter from "../../components/footer/default";
import Blog1 from "../../components/blog/Blog2";
import { Service } from "../../services";
import { Translate } from "../../components/translate";
import { useState, useEffect } from "react";

const Tiplist = () => {
  const t = Translate().use;
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => {
      setData(res);
    });
    console.log(data);
  }, []);
  return (
    <>
      <Seo pageTitle={t.event_name} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.event_name}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t.latest_news1}
                </p>
              </div>
            </div>
          </div>
          <Blog1 data={data.event} />
        </div>
      </section>
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Tiplist;
