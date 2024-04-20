import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css"; // Ensure you import Swiper styles
import "swiper/css/navigation";
import Image from "next/image";
export const imgUrl = "https://emt.tanuweb.cloud";
const Index = ({ data }) => {
  return (
    <section className="masthead -type-4">
      <div className="masthead-slider overflow-x-hidden">
        <Swiper
          modules={[Navigation]}
          className="vh-100"
          loop={true}
          navigation={{
            nextEl: ".hero4-next-active",
            prevEl: ".hero4-prev-active",
          }}
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="masthead__image"
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image
                  src={`${imgUrl}/uploads/${item?.photo1}`}
                  alt="sad"
                  layout="fill"
                  objectFit="cover"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "100px",
                    left: "100px",
                    color: "white",
                    zIndex: 10,
                  }}
                >
                  <h2>{item.text}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="masthead-slider__nav -prev">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-prev-active">
            <i className="icon-arrow-left" />
          </button>
        </div>

        <div className="masthead-slider__nav -next">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-next-active">
            <i className="icon-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
