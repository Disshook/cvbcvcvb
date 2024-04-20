import Image from "next/image";
import { Translate } from "../translate";
const RatingBox = ({ assistant }) => {
  const t = Translate().use;
  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="d-flex items-center">
        <div className="size-40 flex-center bg-blue-1 rounded-4">
          <div className="text-14 fw-600 text-white">{assistant?.ratings}</div>
        </div>
        <div className="text-14 ml-10">
          <div className="lh-15 fw-500">{t.guide}</div>
          <div className="lh-15 text-light-1">
            {assistant?.first_name + " " + assistant?.last_name ||
              "Буянзаяа Ган-эрдэнэ"}
          </div>
        </div>
      </div>
      {/* End d-flex */}
      <div
        style={{
          width: "100%",
          position: "relative",
          height: "300px",
        }}
      >
        <Image
          src={"/tseej.jpg"}
          alt=""
          layout="fill"
          style={{
            objectFit: "cover",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        />
      </div>

      <div className="border-top-light mt-40 mb-20" />
      <div className="d-flex mt-20">
        <i className="icon-group text-16 mr-10 pt-5" />
        <div className="text-15">
          {assistant?.experience || "8 жилийн туршлагатай"}
        </div>
      </div>
      {/* End d-flex */}

      {/* End .row */}
    </div>
  );
};

export default RatingBox;
