import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { hotelsData } from "../../../data/hotels";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import Overview from "../../../components/hotel-single/Overview";
import PopularFacilities from "../../../components/hotel-single/PopularFacilities";
import RatingTag from "../../../components/hotel-single/RatingTag";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import SidebarRight2 from "../../../components/hotel-single/SidebarRight2";
import AvailableRooms2 from "../../../components/hotel-single/AvailableRooms2";
import ReviewProgress2 from "../../../components/hotel-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../components/hotel-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../components/hotel-single/ReplyForm";
import ReplyFormReview2 from "../../../components/hotel-single/ReplyFormReview2";
import Facilities from "../../../components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "../../../components/hotel-single/Surroundings";
import HelpfulFacts from "../../../components/hotel-single/HelpfulFacts";
import Faq from "../../../components/faq/Faq";
import Hotels2 from "../../../components/hotels/Hotels2";
import DefaultFooter from "../../../components/footer/default";
import { Service } from "../../../services";
import { Translate } from "../../../components/translate";

const HotelSingleV2Dynamic = () => {
  const t = Translate().use;
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [hotel, setHotel] = useState({});
  const id = router.query.id;
  useEffect(() => {
    Service.travel.single(id).then((res) => setHotel(res.data));
  }, [id]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo pageTitle="Аялал" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End DefaultHeader */}

      <div className="py-10 bg-dark-2">{/* End .contaienr */}</div>
      {/* End Search filter top */}

      {/* <StickyHeader2 hotel={hotel} /> */}
      {/* End StickyHeader2 */}

      {/* <TopBreadCrumb /> */}
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="hotelSingleGrid">
            <div>
              <Gallery>
                <div className="galleryGrid -type-2">
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                      original={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[0]?.name
                      }
                      thumbnail={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[0]?.name
                      }
                      width={660}
                      height={660}
                    >
                      {({ ref, open }) => (
                        <img
                          src={
                            "https://emt.tanuweb.cloud/uploads/" +
                            hotel?.files?.[0]?.name
                          }
                          ref={ref}
                          onClick={open}
                          alt="image"
                          role="button"
                          className="rounded-4"
                        />
                      )}
                    </Item>
                    <div className="absolute px-20 py-20">
                      <button className="button -blue-1 size-40 rounded-full bg-white">
                        <i className="icon-heart text-16" />
                      </button>
                    </div>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                      original={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[0]?.name
                      }
                      thumbnail={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[0]?.name
                      }
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={
                            "https://emt.tanuweb.cloud/uploads/" +
                            hotel?.files?.[1]?.name
                          }
                          alt="image"
                          className="rounded-4"
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                      original={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[1]?.name
                      }
                      thumbnail={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[1]?.name
                      }
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={
                            "https://emt.tanuweb.cloud/uploads/" +
                            hotel?.files?.[2]?.name
                          }
                          alt="image"
                          className="rounded-4"
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item relative d-flex justify-end items-end">
                    <img
                      src={
                        "https://emt.tanuweb.cloud/uploads/" +
                        hotel?.files?.[3]?.name
                      }
                      alt="image"
                      className="rounded-4"
                    />
                    <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                      <Item
                        original={
                          "https://emt.tanuweb.cloud/uploads/" +
                          hotel?.files?.[3]?.name
                        }
                        thumbnail={
                          "https://emt.tanuweb.cloud/uploads/" +
                          hotel?.files?.[3]?.name
                        }
                        width={362}
                        height={302}
                      >
                        {({ ref, open }) => (
                          <div
                            className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                            ref={ref}
                            onClick={open}
                            role="button"
                          >
                            {t.all_imamge_see}
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                  {/* End .galleryGrid__item */}
                </div>
              </Gallery>
              {/* End gallery grid */}

              <div className="row justify-between items-end pt-40">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {hotel?.title}
                      </h1>
                    </div>
                    {/* End .col */}
                    <div className="col-auto">
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                      <i className="icon-star text-10 text-yellow-1" />
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {hotel?.startingPoint + " " + hotel?.endPoint}
                      </div>
                    </div>
                    <div className="col-auto">
                      {/* <button className="text-blue-1 text-15 underline">
                        Газрын зураг дээр харуулах
                      </button> */}
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div className="text-14 text-md-end">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      {hotel?.symbol}
                      {hotel?.priceChild + "-" + hotel?.priceAdult}
                    </span>
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div id="overview" className="row y-gap-40 pt-40 ">
                <div className="col-12">
                  <Overview data={hotel} />
                </div>
                {/* End col-12 */}
                {/* End .col-12  */}
              </div>
              {/* End .col-12  Overview */}
            </div>
            {/* End left hotel galler  */}

            <div>
              <SidebarRight2 data={hotel} />
            </div>
            {/* End right content */}
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}
      {/* End single page content */}

      {/* End Available Rooms */}

      {/* End facilites section */}
      {/* End Review section */}

      <div className="container mt-40 mb-40">
        <div className="border-top-light"></div>
      </div>

      {/* End Reply Comment box section */}

      {/* End health &  safety measures section */}
      {/* End hotel surroundings */}
      {/* End helpful facts surroundings */}

      {/* End Faq about sections */}
      <hr />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.footertit}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t.footertiti}
                </p>
              </div>
              {/* End sectionTitle */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 hotel={hotel} />
          </div>
          {/* End slide hotel */}
        </div>
        {/* End .container */}
      </section>
      {/* End similar hotel */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(HotelSingleV2Dynamic), {
  ssr: false,
});
