import { useEffect, useState } from "react";
import { Translate } from "../../translate";
import { Service } from "../../../services";

const SearchBar = ({ setSmth }) => {
  const t = Translate().use;
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [locationSearchContent, setLocationSearchContent] = useState([]);

  const [filtered, setFiltered] = useState(locationSearchContent);
  useEffect(() => {
    setSmth(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    Service.all().then((res) => {
      setLocationSearchContent(res.category);
      setFiltered(res.category); // Initially set filtered to all options
    });
  }, []);

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item.name);
    setFiltered(locationSearchContent); // Reset filtered to show all options
  };

  const onSearch = () => {
    const searchTerm = searchValue.toLowerCase();
    if (searchTerm) {
      // If there's a search term, filter the results based on the lowercase search term
      const filteredResults = locationSearchContent.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setFiltered(filteredResults);
    } else {
      // If the search term is empty, reset the filtered list to show all options
      setFiltered(locationSearchContent);
    }
  };

  return (
    <>
      <div className="searchMenu-loc pl-20 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <div className="d-flex">
            <i className="icon-location-2 text-20 text-light-1 mt-5"></i>

            <div className="ml-10 flex-grow-1">
              <h4 className="text-15 fw-500 ls-2 lh-16">{t.location}</h4>
              <div className="text-15 text-light-1 ls-2 lh-16">
                <input
                  autoComplete="off"
                  type="search"
                  placeholder={t.Where_are}
                  className="js-search js-dd-focus"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onBlur={onSearch}
                />
              </div>
            </div>
            {/* End ml-10 */}
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {filtered.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem._id === item._id
                      ? "active"
                      : ""
                  }`}
                  key={item._id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
