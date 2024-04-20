import Image from "next/image";
import { Translate } from "../translate";

const Block1 = ({ data }) => {
  const t = Translate().use;
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">asd Tour</h2>
        <div
          style={{ color: "black" }}
          dangerouslySetInnerHTML={{ __html: data?.text }}
        />
      </div>

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src={`https://emt.tanuweb.cloud/uploads/${data?.cover}`}
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
    </>
  );
};

export default Block1;
