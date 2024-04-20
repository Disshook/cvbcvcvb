import dynamic from "next/dynamic";
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import DefaultHeader from "../components/header/default-header";
import DefaultFooter from "../components/footer/default";
import WhyChoose from "../components/block/BlockGuide";
import Address from "../components/block/Address";
import Social from "../components/common/social/Social";
import ContactForm from "../components/common/ContactForm";
import LocationTopBar from "../components/common/LocationTopBar";

const Contact = () => {
  return (
    <>
      <Seo pageTitle="Холбоо барих" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.011762028575!2d106.90378777705311!3d47.916809871220025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925a7fe7a275%3A0xf5aeb8f7dc26e490!2sState%20Department%20Store!5e0!3m2!1sen!2smn!4v1709369346702!5m2!1sen!2smn"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* End map section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <div className="col-12">
              <div className="text-30 sm:text-24 fw-600">Contact Us</div>
            </div>
            {/* End .col */}

            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">
                Follow us on social media
              </div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      {/* End Why Choose Us section */}

      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
