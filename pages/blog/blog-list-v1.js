import React from "react";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import LocationTopBar from "../../components/common/LocationTopBar";
import DefaultFooter from "../../components/footer/default";
import Blog1 from "../../components/blog/Blog1";
import { useState, useEffect } from "react";
import { Service } from "../../services";
import { Translate } from "../../components/translate";

const BlogListV1 = () => {
  const t = Translate().use;
  const [news, setNews] = useState([]);
  useEffect(() => {
    Service.all().then((res) => setNews(res?.news));
  }, []);
  return (
    <>
      <Seo pageTitle={t.news} />
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
                <h2 className="sectionTitle__title">{t.news}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t.latest_news}
                </p>
              </div>
            </div>
          </div>
          <Blog1 news={news} />
        </div>
      </section>
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV1;
