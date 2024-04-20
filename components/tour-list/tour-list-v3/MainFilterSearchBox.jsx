import LocationSearch from "../common/LocationSearch";
import { Translate } from "../../translate";
import { useState } from "react";
import { useRouter } from "next/router";
const MainFilterSearchBox = () => {
  const t = Translate().use;
  const router = useRouter();
  const [searchParams, setSearchParams] = useState(null);
  const onSearch = () => {
    if (searchParams) {
      router.push(`/tour/tour-list-v3?search=${searchParams}`);
    }
  };
  return (
    <>
      <div className="mainSearch bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 bg-light-2 rounded-4">
        <div className="button-grid items-center">
          <LocationSearch setSmth={setSearchParams} />
          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 -left js-form-dd js-calendar"></div>
          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 -left js-form-dd js-calendar"></div>
          {/* End check-in-out */}

          {/* End guest */}
          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 size-60 lg:w-1/1 col-12 rounded-4 bg-blue-1 text-white"
              onClick={onSearch}
            >
              <i className="icon-search text-20" />
            </button>
          </div>

          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
