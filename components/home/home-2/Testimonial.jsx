import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { EffectCards } from "swiper";

const Testimonial = ({ data }) => {
  const fakeComment = [
    {
      name: "Нарантуяа",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg",
      comment:
        "Гоё мэдээллүүд байна шүү. Нэг мэдсэн бүтэн 2 цаг үзчихсэн байна ",
      createdAt: "2024-01-23",
    },
    {
      name: "Цэцэгсүрэн",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais",
      comment: "Ямар гоё сайт вэ. Хүний хөдөлмөрийг хөнгөвчилсөн.",
      createdAt: "2024-01-23",
    },
    {
      name: "Балдан",
      avatar:
        "https://takhi.mn/wp-content/uploads/2019/04/BALDAN-Hanzag-400x500.jpg",
      comment: "Чи битгий худлаа яриад байгаач.",
      createdAt: "2024-01-23",
    },
    {
      name: "Болд",
      avatar:
        "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais",
      comment: "Энэ шал худлаа шүү хүмүүсээ.",
      createdAt: "2024-01-23",
    },
  ];
  return (
    <>
      <div className="testimonials-slider-2 js-testimonials-slider-2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          navigation={{
            nextEl: ".js-next_active",
            prevEl: ".js-prev_active",
          }}
          pagination={{
            el: ".js-pagination",
            clickable: true,
          }}
        >
          {data?.slice(0, 3).map((item) => (
            <SwiperSlide key={item.username}>
              <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 shadow-2">
                <div>
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">
                    {item.username}
                  </h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">
                    {item.comment}
                  </p>
                  <div className="pt-20 mt-28 border-top-light">
                    <div className="row x-gap-20 y-gap-20 items-center">
                      <div className="col-auto ">
                        <img
                          src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                          alt="image"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col-auto">
                        <div className="text-15 fw-500 lh-14">
                          {item.username}
                        </div>
                        <div className="text-14 lh-14 text-light-1 mt-5">
                          {item?.createdAt?.split("T")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* End swiper-wrapper */}

        <div className="d-flex x-gap-15 items-center justify-center pt-30">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev_active">
              <i className="icon icon-arrow-left" />
            </button>
          </div>
          {/* End .arrow left */}

          <div className="col-auto">
            <div className="pagination -dots text-white-50 js-pagination" />
          </div>
          {/* End col-auto */}

          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover text-white js-next_active">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
          {/* End .arrow right */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
