import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css/thumbs";
import { testimonial2 } from "../../../data/testimonialData";

export default function Testimonials({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const fake = [
    {
      comment: "Сайн байцгаана уу найзуудаа",
      user: "Бат",
      avatar:
        "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png",
    },
    {
      comment:
        "Танай аялалуудаар өмнө явж байсан хурдан шуурхай хариуцлагатай гоё сайт шүү!!",
      user: "Цэцэгдэлгэр",
      avatar:
        "https://images.ctfassets.net/q33z48p65a6w/4yQR9eo9uzvmnJWsy8ejco/68e8fe6e5e6eaba111685ac745ae6857/woman-smiling-in-the-camera.jpg?fit=thumb&fl=progressive&fm=jpg&q=70&w=360",
    },
    {
      comment: "Саяхан найзтайгаа хамт явсан гоё аялал байна билээ.",
      user: "Болд",
      avatar: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
    },
    {
      comment: "Надад ихээхэн сэтгэгдэл үлдээсэн гоё аялал байлаа",
      user: "Индра",
      avatar:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
    },
  ];

  return (
    <>
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
      >
        {fake?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonials -type-2 text-center">
              <div className="mb-40">
                <img src="/img/misc/quote.svg" alt="quote" />
              </div>
              <div className="text-22 md:text-18 fw-600 text-dark-1">
                {item.comment}
              </div>
              <div className="mt-40">
                <h5 className="text-17 lh-15 fw-500">{item.user}</h5>
                <div>{item.designation}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pt-60 lg:pt-40 pb-20">
        <div className="pagination -avatars row x-gap-40 y-gap-40 justify-center ">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={5}
            modules={[Thumbs]}
          >
            {fake.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pagination__item">
                  <img
                    src={item.avatar}
                    alt="image"
                    width={60}
                    height={60}
                    className="rounded-circle  object-fit-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
