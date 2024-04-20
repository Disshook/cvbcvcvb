/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Slider from "react-slick";

const Brand = ({ data }) => {
  console.log(data);
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
        {data?.map((item) => (
          <div
            className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 s"
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.dealyAnimation}
          >
            <div className="pt-20 mt-28 border-bottom-light pb-20">
              <div className="row x-gap-20 y-gap-20 items-center justify-center">
                <div className="col-auto ">
                  <img
                    src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                    alt="image"
                    className="rounded-full"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <h4 className="text-16 fw-500 text-blue-1 mb-20 text-center capitalize layout-pt-sm">
              {item?.first_name} {item?.last_name}
            </h4>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Brand;
