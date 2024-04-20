import { useState } from "react";

const FiltersHotels3 = () => {
  const [filterOption, setFilterOption] = useState("hotel");

  const filterOptions = [
    { label: "Hotel", value: "hotel" },
    { label: "Tour", value: "tour" },
    { label: "Activity", value: "activity" },
    { label: " Holiday Rentals", value: "holiday_rentals" },
    { label: "Car", value: "car" },
    { label: "Cruise", value: "cruise" },
    { label: "Flights", value: "flights" },
    // add more options as needed
  ];

  return (
    <div className="s__controls row x-gap-10 y-gap-10">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`s__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-s-button ${
              filterOption === option.value ? "is--el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FiltersHotels3;
