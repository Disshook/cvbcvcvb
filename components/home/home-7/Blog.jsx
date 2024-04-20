import Link from "next/link";
import blogs from "../../../data/blogs";
import { imgUrl } from "../../../constant";

const Blog = ({ data }) => {
  return (
    <>
      {data?.slice(0, 3).map((item) => (
        <Link
          href={`/blog/blog-details/${item.id}`}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="blogCard -type-3 ">
            <div className="blogCard__image rounded-4">
              <img
                className="rounded-4 js-lazy"
                src={imgUrl + item?.photo}
                alt="image"
              />
            </div>
            <div className="blogCard__content px-50 pb-30 lg:px-20 pb-20">
              <h4 className="text-20 lg:text-18 fw-600 lh-16 text-white">
                {item.title}
              </h4>
              <div className="text-15 lh-14 text-white mt-10">{item.date}</div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;
