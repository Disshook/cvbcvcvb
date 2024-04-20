import dynamic from "next/dynamic";
import Blog4 from "../../components/blog/Blog4";
import Brand2 from "../../components/brand/Brand2";
import Seo from "../../components/common/Seo";
import Footer2 from "../../components/footer/footer-2";
import Header2 from "../../components/header/header-2";
import hero from "../../components/hero/hero-1"
import AppBanner from "../../components/home/home-2/AppBanner";
import BlockGuide from "../../components/home/home-2/BlockGuide";
import CallToActions from "../../components/home/home-2/CallToActions";
import Subscribe from "../../components/home/home-2/Subscribe";
import Testimonial from "../../components/home/home-2/Testimonial";
import TestimonialRating from "../../components/home/home-2/TestimonialRating";
import Travellers from "../../components/home/home-2/Travellers";
import FilterHotels from "../../components/hotels/FilterHotels";
import { Service } from "../../services";
import { Translate } from "../../components/translate";
import { useState, useEffect } from "react";
import MainMenu from "../../components/header/MainMenu";
import { useMyContext } from "../../context/globalContext";
import Facebook from "../../components/Facebook/Facebook";
const Home2 = () => {
  const { isLoading, setLoading } = useMyContext();
  const t = Translate().use;
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    Service.all()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((er) => {
        setLoading(false);
      });
  }, []);
  return isLoading ? (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div class="spinner-border" role="status"></div>
    </div>
  ) : (
    <>
      <Seo pageTitle={t.home} />
      <Facebook />
      <Header2 />

      {/* End Header 2 */}

      <hero/>
      {/* End Hero 2 */}

      <section className="layout-pt-md ">
        <div className="container">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">asdadsa</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">{t.tip_text}</p>
            </div>
          </div>
          <div className="row  sm:y-gap-10 justify-between">
            <BlockGuide data={data.tip} />
          </div>
        </div>
      </section>
      {/* End travel block sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.travel_type}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t.travel_type_text}
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-places-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <Travellers data={data?.region} />
          {/* End travellers component */}
        </div>
        {/* End .container */}
      </section>
      {/* End Connect with Travellers Sections */}

      <section className=" layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.sale_travel}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t.sale_travel_text}
                </p>
              </div>
            </div>
            {/* End .col-auto */}

            {/* <div className="col-auto tabs -pills-2 ">
              <FilterHotelsTabs />
            </div> */}
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <div className="row y-gap-30">
              <FilterHotels data={data?.travel} />
            </div>
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End Best Seller Hotels Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial data={data?.comment} />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          {/* End .row */}
        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.inspiration}</h2>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog4 data={data?.news} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      {/* End Subscribe Section */}
      {/* End AppBanner Section */}

      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home2), { ssr: false });
