import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/default";
import Header7 from "../../components/header/header-7";
import Hero7 from "../../components/hero/hero-7";
import BlockGuide from "../../components/block/BlockGuide";
import Subscribe from "../../components/home/home-7/Subscribe";
import Blog from "../../components/home/home-7/Blog";
import Counter from "../../components/counter/Counter3";
import Testimonial from "../../components/home/home-7/Testimonial";
import TopDestinations from "../../components/home/home-7/TopDestinations";

import Activity from "../../components/activity/Activity";
import Rentals from "../../components/rentals/Rentals";
import { Service } from "../../services";
import { useState, useEffect } from "react";
import HotelTypes from "../../components/home/home-7/HotelTypes";

const Home_7 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);
  return (
    <>
      <Seo pageTitle="Home-7" />
      {/* End Page Title */}

      <Header7 />
      {/* End Header7 */}

      <Hero7 />
      {/* End Hero 7 */}

      <section className="layout-pt-xl layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Аялалын төрөл</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Өөрийн хүссэн аялалын төрлөө сонгоорой
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 item_gap-x30">
            <HotelTypes data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End ypes of Stays */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Шилдэг аялалууд</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity data={data?.travel} />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Homes Guests Love Sections */}

      {/* End top destination section */}

      <section className="section-bg rounded-4 overflow-hidden">
        <div className="section-bg__item -left-100 -right-100 bg-blue-2" />
        <div className="section-bg__item col-4 -right-100 lg:d-none">
          <img
            src="https://img.freepik.com/premium-vector/young-happy-man-tourist-flat-cartoon-character-traveling-male-people-summer-vacation-trip-isolated-white-background_37895-952.jpg"
            alt="image"
          />
        </div>
        {/* End right bg image */}

        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="pt-120 pb-120 lg:pt-80 lg:pb-80">
                <h2 className="text-30 fw-600">Сэтгэгдэл</h2>

                <div className="overflow-hidden pt-60 lg:pt-40">
                  <Testimonial />
                </div>
                {/* End overflow hidden */}
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Testimonial Sectoin */}

      <section className="section-bg pt-40 pb-40">
        <div className="section-bg__item -left-100 -right-100 border-bottom-light"></div>

        <div className="container">
          <div className="row y-gap-30 justify-center text-center">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Аялалын талаархи мэдээ</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="blog-grid-1 pt-40">
            <Blog data={data?.news} />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End blog section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Яагаад биднийг сонгох вэ
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-20 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      {/* <Subscribe /> */}
      {/* End Subscribe Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_7), { ssr: false });
