import { Translate } from "../../translate";

const TopHeaderFilter = () => {
  const t = Translate().use;
  return (
    <>
      <div className="col-auto">
        <div className="text-18">
          <span className="fw-500"> {t.tour_tit}</span>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default TopHeaderFilter;
