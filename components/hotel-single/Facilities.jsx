import { Translate } from "../translate";
const Facilities = ({ data }) => {
  console.log(data);

  const bathroom = data?.bathroom?.split("$");
  const bedroom = data?.bedroom?.split("$");
  const media = data?.media?.split("$");
  const food = data?.food?.split("$");
  const general = data?.general?.split("$");
  const cleaning = data?.cleaning?.split("$");
  const t = Translate().use;

  const facilitiesContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          icon: "icon-bathtub ",
          title: `${t.bathroom}`,
          facilities: bathroom, // Remove the extra array here
        },
        {
          id: 2,
          icon: "icon-bed ",
          title: `${t.bedroom}`,
          facilities: bedroom,
        },
        {
          id: 2,
          icon: "icon-city-2",
          title: `${t.general}`,
          facilities: general,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          icon: "icon-tv",
          title: `${t.media_and_technology}`,
          facilities: media,
        },
        {
          id: 2,
          icon: "icon-juice",
          title: `${t.food_and_drink}`,
          facilities: food,
        },
        {
          id: 3,
          icon: "icon-washing-machine",
          title: `${t.cleaning_services}`,
          facilities: cleaning,
        },
      ],
    },
  ];

  return (
    <>
      {facilitiesContent.map((item) => (
        <div className="col-xl-4" key={item.id}>
          <div className="row y-gap-30">
            {item?.items?.map((facility) => (
              <div className="col-12" key={facility.id}>
                <div>
                  <div className="d-flex items-center text-16 fw-500">
                    <i className={`${facility.icon} text-20 mr-10`} />
                    {facility.title}
                  </div>
                  <ul className="text-15 pt-10">
                    {facility?.facilities?.map((val, i) => (
                      <li className="d-flex items-center" key={i}>
                        <i className="icon-check text-10 mr-20" />
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Facilities;
