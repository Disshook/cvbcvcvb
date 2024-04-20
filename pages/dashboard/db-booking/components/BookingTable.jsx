import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";
import { Service } from "../../../../services";
import Image from "next/image";
import { useRouter } from "next/router";

const BookingTable = () => {
  const router = useRouter();
  const showAmount = 5;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [tabId, setTabId] = useState("");

  const handleTabClick = (index, id) => {
    setActiveTab(index);
    setTabId(id);
  };

  useEffect(() => {
    Service.all().then((res) => setData(res));
  }, []);
  useEffect(() => {
    const { page } = router.query;
    setPage(page || 1);
  }, [router.query]);

  // const tabItems = [
  //   "All Booking",
  //   "Completed",
  //   "Processing",
  //   "Confirmed",
  //   "Cancelled",
  //   "Paid",
  //   "Unpaid",
  //   "Partial Payment",
  // ];
  const tabItems = data?.region?.map((list, index) => list?.name);
  const startIndex = (page - 1) * showAmount;
  const endIndex = startIndex + showAmount;
  const paginatedData = data?.travel?.slice(startIndex, endIndex);
  const maxPage = Math.ceil(data?.travel?.length / showAmount);

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems?.map((item, index) => (
            <div className="col-auto" key={item?._id}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button capitalize ${activeTab === index ? "is-tab-el-active" : ""
                  }`}
                onClick={() => {
                  handleTabClick(index, item?._id);
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Зураг</th>
                    <th>Нэр</th>
                    <th>Огноо</th>
                    <th>Хуваарь</th>
                    <th>Үнэ</th>
                    <th>Төлөв</th>
                    <th>Үйлдэл</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData?.map((list, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <Image
                            src={
                              `https://emt.tanuweb.cloud/uploads/` +
                              list?.files[0]?.name
                            }
                            width={150}
                            height={100}
                            alt=""
                          />
                        </td>
                        <td>{list?.title}</td>
                        <td>{list?.createdAt?.split("T")[0]}</td>
                        <td className="lh-16">
                          Эхлэх : {list?.startDate}
                          <br />
                          Дуусах : {list?.endDate}
                        </td>
                        <td className="fw-500">$130</td>
                        <td>
                          <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                            Баталгаажсан
                          </span>
                        </td>
                        <td>
                          <ActionsButton />
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td>Hotel</td>
                    <td>The May Fair Hotel</td>
                    <td>04/04/2022</td>
                    <td className="lh-16">
                      Check in : 05/14/2022
                      <br />
                      Check out : 05/29/2022
                    </td>
                    <td className="fw-500">$130</td>
                    <td>$0</td>
                    <td>$35</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                        Confirmed
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination max={maxPage} />
    </>
  );
};

export default BookingTable;
