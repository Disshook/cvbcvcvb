import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Blog1 = ({ news }) => {
  const [filterOption, setFilterOption] = useState("art_culture");
  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls"></div>
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {news?.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                href={`/blog/blog-details/${item._id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img
                      // className="cover w-100 img-fluid"
                      style={{ objectFit: "cover", width: "100%", height: "300px" }}
                      src={`https://emt.tanuweb.cloud/uploads/${item?.photo}`}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">
                    {item.date}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default Blog1;
