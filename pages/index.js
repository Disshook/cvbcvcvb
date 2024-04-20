import dynamic from "next/dynamic";
import Blog4 from "../components/blog/Blog4";
import Seo from "../components/common/Seo";
import Footer2 from "../components/footer/footer-8";
import Header2 from "../components/header/header-2";
import Header1 from "../components/header/header-1";
import Hero2 from "../components/hero/hero-2";
import Hero1 from "../components/hero/hero-4";
import BlockGuide from "../components/home/home-2/BlockGuide";
import Testimonial from "../components/home/home-5/Testimonial";
import TestimonialRating from "../components/home/home-2/TestimonialRating";
import Travellers from "../components/home/home-2/Travellers";
import FilterHotels from "../components/hotels/FilterHotels";
import { Service } from "../services";
import { Translate } from "../components/translate";
import { useState, useEffect } from "react";
import { useMyContext } from "../context/globalContext";
import { useRouter } from "next/router";
import Facebook from "../components/Facebook/Facebook";
const Home2 = () => {
  const { isLoading, setLoading } = useMyContext();
  const t = Translate().use;
  const { locale, push, asPath } = useRouter();
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
      {/*<Facebook />*/}
      <Header1 />

      {/* End Header 2 */}
      <Hero1 />
      {/* End Hero 2 */}

      <section className="layout-pt-md ">
        <div className="container">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">{t.tip}</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">{t.tip_text}</p>
            </div>
          </div>
          <div className="row  sm:y-gap-10 justify-between">
            <BlockGuide
              data={data?.tip?.filter((el) => el.language === locale)}
            />
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

          <Travellers
            data={data?.category?.filter((list) => list.language === locale)}
          />
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
              <FilterHotels
                data={data?.travel?.filter((item) => item?.language === locale)}
              />
            </div>
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End Best Seller Hotels Sections */}
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
            <Blog4
              data={data?.news?.filter((list) => list.language === locale)}
            />
          </div>
        </div>
      </section>

      <Footer2 />

    </>
  );
};

export default dynamic(() => Promise.resolve(Home2), { ssr: false });
