import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import React from "react";

export const imgUrl = "https://emt.tanuweb.cloud";

const Index = ({ data }) => {
  function insertBreaks(text, maxLength = 30) {
    let parts = [];
    for (let i = 0; i < text.length; i += maxLength) {
      const part = text.substring(i, i + maxLength);
      parts.push(part);
    }

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}{index < parts.length - 1 ? <br /> : null}
      </React.Fragment>
    ));
  }

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
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="masthead__image" style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={`${imgUrl}/uploads/${item?.photo1}`}
                  alt={item?.text || "Image"}
                  layout="fill"
                  objectFit="cover"
                />
                <div style={{
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  color: "white",
                  zIndex: 10,
                }}>
                  <h2>{insertBreaks(item.text || '')}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="masthead-slider__nav -prev">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-prev-active" aria-label="Previous Slide">
            <i className="icon-arrow-left" />
          </button>
        </div>

        <div className="masthead-slider__nav -next">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-next-active" aria-label="Next Slide">
            <i className="icon-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
