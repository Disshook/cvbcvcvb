import Image from "next/image";
import Link from "next/link";
import { Translate } from "../../translate";
import { useState } from "react";

const AddBanner = ({ data }) => {
  const [hoverStates, setHoverStates] = useState(
    Array(data?.length).fill(false)
  );
  const t = Translate().use;
  const addContent = [
    {
      id: 1,
      img: "/img/backgrounds/1.png",
      title: (
        <>
          {" "}
          Things To Do On
          <br /> Your Trip
        </>
      ),
      meta: "",
      routerPath: "/",
      delayAnimation: "100",
    },
    {
      id: 2,
      img: "/img/backgrounds/3.png",
      title: (
        <>
          Let Your Curiosity
          <br />
          Do The Booking
        </>
      ),
      meta: "",
      routerPath: "/",
      delayAnimation: "200",
    },
    {
      id: 3,
      img: "/img/backgrounds/2.png",
      title: "Up to 70% Discount!",
      meta: "Enjoy Summer Deals",
      routerPath: "/",
      delayAnimation: "300",
    },
  ];

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <>
      {data?.slice(0, 3)?.map((item, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-41:45">
              <Image
                width={410}
                height={455}
                className="js-lazy img-ratio"
                src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-50 px-50 lg:py-30 lg:px-30">
              <h4 className="text-20 lg:text-20 text-white">
                {item?.title?.slice(0, 55) + "..."}
              </h4>
              <div className="d-inline-block mt-30">
                <Link
                  href={`/tip/tip-detail/${item._id}`}
                  className="button px-48 py-15  -min-180  "
                  style={{
                    color: hoverStates[index] ? "white" : "black",
                    backgroundColor: hoverStates[index] ? "#abb2b9" : "#f0f0f0",
                  }} // Added inline styles here
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {t.learn_more}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
