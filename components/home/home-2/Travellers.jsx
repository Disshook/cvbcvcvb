import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
const Travellers = ({ data }) => {
  return (
    <div className="pt-40 overflow-hidden js-section-slider">
      <Swiper
        loop
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-places-next",
          prevEl: ".js-places-prev",
        }}
        pagination={{
          el: ".js-places-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <Link
              href={`/tour/tour-list-v3?category=${item?._id}`}
              className=""
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div
                className=""
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                  className=""
                  src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                  alt="image"
                />
              </div>
              <div className="">
                <h4 className="text-18 lh-13 fw-500 text-dark-1 text-center">
                  {item?.name}
                </h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Travellers;
