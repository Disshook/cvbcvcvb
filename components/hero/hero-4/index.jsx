import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css"; // Ensure you import Swiper styles
import "swiper/css/navigation";
import Image from "next/image";
import img from "../../../public/images.jpg";
import img1 from "../../../public/images1.jpg";
import img2 from "../../../public/images2.jpg";
import img3 from "../../../public/images3.jpg";
import img4 from "../../../public/images4.jpg";


const Index = () => {
  const data = [
    { id: 1, img: img, name: "Chinese" },
    { id: 2, img: img1, name: "Монгол" },
    { id: 3, img: img2, name: "Korean" },
    { id: 4, img: img3, name: "Japan" },
    { id: 5, img: img4, name: "Canada" }
  ];

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
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="masthead__image" style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src={item.img} alt={item.name} layout="fill" objectFit="cover" />
                <div style={{ position: "absolute", bottom: "100px", left: '100px', color: "white", zIndex: 10 }}>
                  <h2>{item.name}</h2>
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
