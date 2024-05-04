import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/header-3";
import DefaultFooter from "../../components/footer/footer-8";
import WhyChoose from "../../components/block/BlockGuide";
import Block1 from "../../components/about/Block1";
import Image from "next/image";
import Counter from "../../components/counter/Counter";
import Team1 from "../../components/team/Team1";
import Testimonial from "../../components/testimonial/Testimonial";
import Counter2 from "../../components/counter/Counter2";
import Brand from "../../components/brand/Brand";
import { Translate } from "../../components/translate";
import { Service } from "../../services";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import Document from "../../components/brand/Documents";
const About = () => {
  const t = Translate().use;
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => setData(res));
  }, []);
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    axiosInstance
      .get(
        "https://emt.tanuweb.cloud/api/v1/additional/65e30b0f784c105405210e6e"
      )
      .then((res) => setPhoto(res.data.data));
  }, []);
  console.log(photo);
  return (
    <>
      <Seo pageTitle={t.about} />


      <div className="header-margin"></div>

      <DefaultHeader />
      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src={`https://emt.tanuweb.cloud/uploads/${photo?.cover}`}
            alt="image"
            priority
          />
        </div>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                {t.about_name}
              </h1>
              <div className="text-white mt-15"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 data={data.additional} />
          </div>
        </div>
      </section>

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center"></div>
          </div>
        </div>
      </section>
      <section className="section-bg layout-pt-sm ">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title layout-pb-md">Documents</h2>
              </div>
            </div>
          </div>


          <div className="overflow-hidden  js-section-slider">
            <div className="item_gap-x30">
              <Document />
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg layout-pt-md ">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.advinter}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <Testimonial data={data.comment} />
            </div>
          </div>
          {/* End .overflow-hidden */}

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            {/* End .col */}
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End testimonial section */}
      <section className="section-bg layout-pt-sm ">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title layout-pb-md">{t.guide}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden  js-section-slider">
            <div className="item_gap-x30">
              <Brand data={data.assistant} />
            </div>
          </div>

          {/* End .overflow-hidden */}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      {/* End Call To Actions Section */}
      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
