import Image from "next/image";
import Slider from "react-slick";
import { testimonial1 } from "../../data/testimonialData";

const Testimonial = ({ data }) => {
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
            className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40"
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.dealyAnimation}
          >
            <h4 className="text-16 fw-500 text-blue-1 mb-20">
              {item?.username}
            </h4>
            <p className="testimonials__text lh-18 fw-500 text-dark-1">
              {item?.comment}
            </p>
            <div className="pt-20 mt-28 border-top-light">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <Image
                    width={60}
                    height={60}
                    src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                    alt="image"
                    className="size-60 rounded-full"
                  />
                </div>
                <div className="col-auto">
                  <div className="text-15 fw-500 lh-14">
                    {item?.createdAt?.split("T")[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
