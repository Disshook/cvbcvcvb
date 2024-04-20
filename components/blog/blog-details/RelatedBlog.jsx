import Image from "next/image";

const RelatedBlog = ({ news }) => {
  return (
    <>
      {news?.slice(0, 4).map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.id}>
          <a
            href={`/blog/blog-details/${item._id}`}
            className="blogCard -type-2 d-block bg-white rounded-4 shadow-4"
          >
            <div className="blogCard__image">
              <div className="rounded-4">
                <Image
                  width={400}
                  height={300}
                  className="cover w-100 img-fluid"
                  src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="px-20 py-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-10">
                {item?.createdAt?.split("T")[0]}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RelatedBlog;