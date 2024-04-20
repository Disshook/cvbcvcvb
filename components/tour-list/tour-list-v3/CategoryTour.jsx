/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import { Translate } from "../../translate";

const CategoryTourProperties = ({ data }) => {
  const t = Translate().use;
  return (
    <>
      {data?.map((item) => (
        <div
          className="col-12"
          key={item?._id}
          data-aos="fade"
          data-aos-delay={item?.delayAnimation}
        >
          <div className="border-top-light pt-20">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                  <div className="cardImage__content custom_inside-slider">
                    <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {item?.files?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <img
                            style={{
                              width: "400px",
                              height: "200px",
                              objectFit: "cover",
                            }}
                            className="rounded-4  js-lazy"
                            src={`https://emt.tanuweb.cloud/uploads/${slide?.name}`}
                            alt="image"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* End .cardImage__content */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                  {/* End .cardImage__wishlist */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <div className="row x-gap-10 items-center">
                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">
                      {t.duration + " "}
                      {item?.duration}
                    </p>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">{item?.category?.name}</p>
                  </div>
                  {/* End col-auto */}
                </div>
                {/* End .row */}
                <h3 className="text-16 lh-16 fw-500">
                  <br />
                </h3>
                <p className="text-14 lh-14 mt-5 ">{item?.direction}</p>
                <div className="text-14 lh-15 fw-500 mt-20">
                  {t.startpoint + ":  "}
                  {item?.startingPoint}
                  <br />
                  {t.endpoint + ":  "}
                  {item?.endPoint}
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="text-14 text-light-1 mt-10">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  US${item?.priceAdult + " - " + item?.priceChild}
                </div>

                <Link
                  href={`/hotel/hotel-single-v2/${item?._id}`}
                  className="button py-10 px-24 -dark-1 bg-blue-1 text-white mt-15"
                >
                  View Detail <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
              {/* End col-md */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default CategoryTourProperties;
