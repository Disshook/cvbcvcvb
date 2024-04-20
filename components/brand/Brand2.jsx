import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

const Brand2 = () => {
  const brandImages = [
    {
      photo: "/khanbank.png",
      link: "https://www.khanbank.com",
    },
    {
      photo: "/kto.png",
      link: "https://ktoulaanbaatar.com/",
    },
    {
      photo: "/humanity.png",
      link: "https://humanities.edu.mn/",
    },
    {
      photo: "/mto.png",
      link: "https://www.facebook.com/www.mto.mn/",
    },
    {
      photo: "/fantastic.png",
      link: "https://fantasticproduction.mn/",
    },
    {
      photo: "/bayngol.png",
      link: "https://bayangolhotel.mn",
    },
    {
      photo: "/tway.png",
      link: "https://www.twayair.com/",
    },
  ];
  return (
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
          slidesPerView: 6,
        },
      }}
    >
      {brandImages.map((item, i) => (
        <SwiperSlide key={i}>
          <Link href={`${item.link}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100px",
              }}
            >
              <div className="d-flex justify-center">
                <img src={`${item.photo}`} alt="image" width={100} />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// {data?.map((item) => (
//   <SwiperSlide key={item._id}>
//     <Link
//       href="/tour/tour-list-v3"
//       className=""
//       data-aos="fade"
//       data-aos-delay={item.delayAnimation}
//     >
//       <div
//         className=""
//         style={{
//           width: "100%",
//           height: "100px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           style={{ height: "100%" }}
//           className=""
//           src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
//           alt="image"
//         />
//       </div>
//       <div className="">
//         <h4 className="text-18 lh-13 fw-500 text-dark-1 text-center">
//           {item?.name}
//         </h4>
//       </div>
//     </Link>
//   </SwiperSlide>
export default Brand2;
