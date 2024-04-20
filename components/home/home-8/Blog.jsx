import Link from "next/link";
import blogs from "../../../data/blogs";

const Blog = ({ data }) => {
  return (
    <>
      {data?.slice(0, 2).map((item) => (
        <div className="col-lg-4 col-sm-6" key={item._id}>
          <Link
            href={`/blog/blog-details/${item?._id}`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="ratio ratio-4:3 rounded-4 rounded-8">
                <img
                  className="img-ratio js-lazy"
                  src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
            </div>
          </Link>
        </div>
      ))}

      <div className="col-lg-4">
        <div className="row y-gap-30">
          {data?.map((item) => (
            <div className="col-lg-12 col-md-6" key={item._id}>
              <Link
                href={`/blog/blog-details/${item._id}`}
                className="blogCard -type-1 d-flex items-center"
              >
                <div className="blogCard__image size-130 rounded-8">
                  <img
                    src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                    alt="image"
                    className="object-cover size-130"
                  />
                </div>
                <div className="ml-24">
                  <h4 className="text-18 lh-14 fw-500 text-dark-1">
                    {item.title}
                  </h4>
                  <p className="text-15">{item.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
