/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultHeader from "../../../components/header/default-header";
import DefaultFooter from "../../../components/footer/default";
import LocationTopBar from "../../../components/common/LocationTopBar";
import RelatedBlog from "../../../components/blog/blog-details/RelatedBlog";
import blogsData from "../../../data/blogs";
import { useRouter } from "next/router";
import DetailsContent from "../../../components/blog/blog-details/DetailsContent";
import FormReply from "../../../components/blog/blog-details/FormReply";
import TopComment from "../../../components/blog/blog-details/TopComment";
import BlogNavigator from "../../../components/blog/blog-details/BlogNavigator";
import Comments from "../../../components/blog/blog-details/Comments";
import { Service } from "../../../services";
import { Translate } from "../../../components/translate";
import TipContent from "../../../components/blog/blog-details/TipContent";
const BlogSingleDynamic = () => {
  const t = Translate().use;
  const router = useRouter();
  const [blog, setBlogItem] = useState("");
  const [event, setEvent] = useState([]);
  const id = router.query.id;

  useEffect(() => {
    Service.single(id, "event")
      .then((res) => setBlogItem(res?.data))
      .catch((er) => console.log(er));
    Service.all().then((res) => setEvent(res.event));
  }, [id]);

  return (
    <>
      <Seo pageTitle={t.event_name} />
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <DefaultHeader />
      {/* End Header 1 */}
      <hr />
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                {blog?.tag}
              </div>
              <h1 className="text-30 fw-600">{blog?.title}</h1>
              <div className="text-15 text-light-1 mt-10">
                {t.datalala}: {blog?.createdAt?.split("T")[0]}
              </div>
            </div>
            <div className="col-12">
              <img
                src={`https://emt.tanuweb.cloud/uploads/${blog?.photo}`}
                alt={blog?.title}
                className="col-12 rounded-8  _details"
                style={{ maxWidth: "800px" }}
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <TipContent data={blog} />
              <div className="border-top-light pt-40 mt-40" />
              {/* End Leave a repy title */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.event_name}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedBlog news={event} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}
      <hr />
      {/* End Call To Actions Section */}
      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
