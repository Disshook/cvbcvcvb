/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
const Document = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axiosInstance
      .get("additional/65e30b0f784c105405210e6e")
      .then((res) => setData(res.data.data));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data?.files?.map((item) => (
          <div
            className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 s"
            key={item._id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <div className="pt-20 mt-28  pb-20">
              <div className="row x-gap-20 y-gap-20 items-center justify-center">
                <div className="col-auto ">
                  <img
                    src={`https://emt.tanuweb.cloud/uploads/${item?.name}`}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Document;
