import { Translate } from "../../translate";
import Link from "next/link";

const BlockGuide = ({ data }) => {
  const t = Translate().use;

  return (
    <>
      {data?.slice(0, 3)?.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item._id}
        >
          <Link href={`/tip/tip-detail/${item._id}`}>
            <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
              <div className="d-flex justify-center">
                <img
                  src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                  alt="image"
                  className="js-lazy"
                  width={80}
                />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-18 fw-500">{item.title}</h4>
                <p className="text-15 mt-10">{item.text}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
