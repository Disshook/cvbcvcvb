import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Pagination from "../../../components/tour-list/common/Pagination";
import TopHeaderFilter from "../../../components/tour-list/tour-list-v3/TopHeaderFilter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Service } from "../../../services";
import CategoryTourProperties from "../../../components/tour-list/tour-list-v3/CategoryTour";
import MainFilterSearchBox from "../../../components/tour-list/tour-list-v3/MainFilterSearchBox";
import { Translate } from "../../../components/translate";

const SingleTour = () => {
  const router = useRouter();
  const t = Translate().use;
  const { locale } = useRouter();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(router.query.page);
  const searchPop = router.query.search || "";
  const catId = router.query.category;

  const [indexOf, setIndexOf] = useState(0);
  const [showItems] = useState([5, 10, 20, 50]);

  useEffect(() => {
    Service.all().then((res) => {
      setData(res.travel);
    });
  }, []); // Add id as a dependency
  useEffect(() => {
    // Parse the page number from the URL query parameters, defaulting to 1 if undefined or not a number
    const page = parseInt(router.query.page) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const indexOfLastTour = currentPage * showItems[indexOf];
  const indexOfFirstTour = indexOfLastTour - showItems[indexOf];

  let filteredData = data;

  if (searchPop) {
    filteredData = data.filter(
      (tour) =>
        tour?.category?.name?.includes(searchPop) ||
        tour?.category?.name === searchPop ||
        tour?.title?.includes(searchPop)
    );
  }
  if (catId) {
    filteredData = data.filter(
      (tour) =>
        tour?.category?._id?.includes(catId) || tour?.category?._id === catId
    );
  }
  // Filter by language based on current locale
  filteredData = filteredData.filter((tour) => tour?.language === locale);

  const currentTours = filteredData?.slice(indexOfFirstTour, indexOfLastTour);

  const lastPage = Math.ceil(filteredData?.length / showItems[indexOf]);

  return (
    <>
      <Seo pageTitle={t.travel} />
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <Header11 />

      {/* End Header 1 */}
      <section className="layout-pb-md">
        <div className="header__container container layout-pt-sm">
          <MainFilterSearchBox />
          {/* End .row */}

          <div className="row y-gap-10 justify-between items-center pt-20">
            <TopHeaderFilter />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-20">
            {filteredData ? (
              <CategoryTourProperties data={currentTours} />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "50vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div class="spinner-border" role="status"></div>
              </div>
            )}
          </div>
          {/* End .row */}

          <Pagination last={lastPage} />
          {/* End Pagination */}
        </div>
        {/* End .halfMap__content */}
        {/* End halfMap__map */}
      </section>
      {/* End halfMap content */}
    </>
  );
};

export default SingleTour;
