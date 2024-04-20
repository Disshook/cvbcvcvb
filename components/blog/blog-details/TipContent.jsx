import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import Link from "next/link";

const TipContent = ({ data }) => {
  const content = data?.content?.split("$");
  return (
    <>
      <h3 className="text-20 fw-500 capitalize">{data?.title}</h3>
      <div className="text-15 mt-20 pb-lg">
        <div dangerouslySetInnerHTML={{ __html: data?.tip }} />
      </div>
    </>
  );
};

export default TipContent;
