import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer6 from "../../components/footer/footer-6";
import Header8 from "../../components/header/header-8";
import Hero8 from "../../components/hero/hero-8";
import BlockGuide from "../../components/home/home-8/BlockGuide";
import Testimonial from "../../components/testimonial/Testimonial";
import Activity from "../../components/activity/Activity";
import CounterDark from "../../components/counter/CounterDark";
import Brand from "../../components/brand/Brand";
import PopularCars from "../../components/home/home-8/PopularCars";
import TopDestinations from "../../components/home/home-8/TopDestinations";
import Counter4 from "../../components/counter/Counter4";
import { useEffect, useState } from "react";
import { Service } from "../../services";
import Blog from "../../components/home/home-8/Blog";
import Link from "next/link";

const Home_8 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);
  return (
    <>
      <Seo pageTitle="Home-8" />
      {/* End Page Title */}

      <Header8 />
      {/* End Header 8 */}

      <Hero8 />
      {/* End Hero 8 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Манай давуу тал</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Coose Us */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Шилдэг аялалууд</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Сүүлийн сарын хугацаанд хамгийн их зарагдсан аялал
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
      {/* Popular Car Hire Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Монголд байрлах шилдэг газрууд
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <TopDestinations data={data?.region} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Top Destinations Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-1">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle text-white">
                <h2 className="sectionTitle__title">Хэрэглэгчийн сэтгэгдэл</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-60 lg:pt-40 sm:pt-30">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>
          {/* End .overflow-hidden */}

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <CounterDark />
            </div>
            {/* End .col */}

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">
                Манайх бол Монгол улсад томоохон байр суурьтай компани юм.
              </h2>
              <p className="mt-40 lg:mt-20">
                Манай компанийн үнэт зорилт бол аялагчдыг хэрхэн боломжит
                төсвөөр чанартай аялуулах вэ гэдэгт оршино.
              </p>

              <div className="d-inline-block mt-40 lg:mt-20">
                <a href="#" className="button -md -blue-1 bg-dark-1 text-white">
                  Дэлгэрэнгүй <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">
                  <Counter4 />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Дараагийн аялалдаа бэлэн үү?
                </h2>
              </div>
            </div>
            {/* End .col */}
            <div className="col-auto">
              <Link
                href="/blog/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                Илүү ихийг <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Blog data={data?.news} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Sections */}

      {/* <AppBanner /> */}
      {/* End AppBanner section */}

      {/* <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer6 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_8), { ssr: false });
