import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import Footer5 from "../../components/footer/footer-5";
import Header6 from "../../components/header/header-6";
import Hero6 from "../../components/hero/hero-6";
import BlockGuide from "../../components/home/home-6/BlockGuide";
import AddBanner from "../../components/home/home-6/AddBanner";
import TourCategories from "../../components/home/home-6/TourCategories";
import Activity from "../../components/activity/Activity";
import Blog from "../../components/home/home-6/Blog";
import Testimonials from "../../components/home/home-6/Testimonials";
import Activity2 from "../../components/activity/Activity2";
import { useState, useEffect } from "react";
import { Service } from "../../services";
import { Translate } from "../../components/translate";

const Home6 = () => {
  const t = Translate().use;
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);
  return (
    <>
      <Seo pageTitle="Home-6" />
      {/* End Page Title */}

      <Header6 />
      {/* End Header 6 */}

      <Hero6 />
      {/* End Hero 6 */}
      {t.Customers}
      <section className="layout-pt-md layout-pb-md bg-light-2">
        <div className="container">
          <div className="row y-gap-30">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Block Guide */}

      {/* End Special Offer Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center is-in-view">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Эрэлттэй </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Хамгийн олон хүн хайсан аялалууд
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Аялалын төрлүүд</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Хүссэн чиглэлийн аялалаа эндээс сонгон үзээрэй
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <TourCategories data={data?.region} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Adventure and activity */}

      {/* End Popular Destinations */}

      <section className="section-bg layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Сэтгэгдэл</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Манай үйлчилгээг авсан хүмүүсийн сэтгэгдэл
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-center pt-50 md:pt-30">
            <div className="col-xl-7 col-lg-10">
              <div className="overflow-hidden">
                <Testimonials data={data?.comment} />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Testimonials Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center is-in-view">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Шинэ мэдээ</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Сүүлд орсон шинэ мэдээ
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity2 data={data?.news} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}

      {/* <AppBanner /> */}
      {/* End DownloadAppBanner section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Жуулчдад зориулсан мэдээ
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Аялагчдад зориулан манайхаас бэлдсэн мэдээнүүд
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog data={data?.news} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog sections */}

      <Footer5 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home6), { ssr: false });
