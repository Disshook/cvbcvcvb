import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import Link from "next/link";

const DetailsContent = ({ data }) => {
  const content = data?.content?.split("$");
  return (
    <>
      <h3 className="text-20 fw-500 ">{data?.title}</h3>
      <div className="text-15 mt-20">
        <div className="quote mt-30 mb-30 w-100 text-justify">
          <div className="quote__line bg-blue-1" />
          <div className="quote__icon">
            <img src="/img/misc/quote-light.svg" alt="icon" />
          </div>
          <div
            className="text-18 fw-500 w-100 text-justify"
            style={{
              width: "100%",
              textAlign: "justify",
            }}
          >
            “{data?.summary}“
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.description }} />
      </div>

      <ul className="list-disc text-15 mt-30">
        {content?.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>

      <div className="text-15 mt-20">
        {data?.description1}
        <br />
        <br />
      </div>

      <div className="text-15 mt-20">{data?.description2}</div>

      <div className="row y-gap-20 justify-between pt-30">
        <div className="col-auto">
          <div className="d-flex items-center">
            <div className="fw-500 mr-10">Share</div>
            <div className="d-flex items-center">
              <Social2 />
            </div>
          </div>
        </div>
        {/* End social share */}

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            {blogsData.slice(0, 4).map((item) => (
              <div key={item?._id} className="col-auto">
                <Link
                  href={`/blog/blog-details/${item?._id}`}
                  className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
                >
                  {item.tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* End tags */}
      </div>
    </>
  );
};

export default DetailsContent;
