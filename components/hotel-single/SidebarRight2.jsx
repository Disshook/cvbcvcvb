import { Translate } from "../translate";
import Map from "./Map";
const SidebarRight2 = ({ data }) => {
  const t = Translate().use;
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="mb-15">
        <Map data={data?.plan} />
      </div>
      {/* End map */}

      <div className="row y-gap-10">
        <div className="col-12">
          <div className="d-flex items-center">
            <i className="icon-pedestrian text-20 text-blue-1" />
            <div className="text-14 fw-500 ml-10">
              {data?.duration || "7 хоног 8 шөнө"}
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="border-top-light mt-15 mb-15" />
      <div className="text-15 fw-500">{t.info}</div>
      <div className="d-flex justify-between pt-10">
        <div className="text-14">{data?.direction}</div>
      </div>

      <div className="d-flex justify-between pt-5">
        <div className="text-14">{t.person_number}</div>
        <div className="text-14 text-light-1">{data.person || "10"}</div>
      </div>
      <div className="d-flex justify-between pt-5">
        <div className="text-14">{t.pperson}</div>
        <div className="text-14 text-light-1">{data.priceAdult || "280$"}</div>
      </div>

      <div className="d-flex justify-between pt-5">
        <div className="text-14">{t.childen}</div>
        <div className="text-14 text-light-1">{data.priceChild || "180$"}</div>
      </div>
    </div>
  );
};

export default SidebarRight2;
