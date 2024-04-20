const ImportantInfo = () => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Аялалд дагалдах зүйлс</div>
        <ul className="list-disc">
          <li>Хурдан утасгүй интернэтийн үйлчилгээ</li>
          <li>Туршлагатай хөтөч</li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Нислэгийн хуваарь</div>
        <div className="text-15">
          Departures from 01st April 2022: Tour departs at 8 am (boarding at
          7.30 am), Victoria Coach Station Gate 1-5
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="fw-500 mb-10">Анхаарах зүйлс</div>
        <ul className="list-disc">
          <li>Хугацаа: 11h</li>
          <li>Утас</li>
          <li>Шуурхай баталгаажуулалт</li>
        </ul>
      </div>

      {/* <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Exclusions</div>
        <ul className="list-disc">
          <li>Hotel pick-up and drop-off</li>
          <li>Gratuities</li>
          <li>Lunch</li>
        </ul>
      </div> */}

      <div className="col-12">
        <div className="fw-500 mb-10">Нэмэлт мэдээлэл</div>
        <ul className="list-disc">
          <li>Захиалга хийх үед баталгаажуулалтыг хүлээн авна</li>
          <li>
            Өглөөний 8 цагт хөдөлнө (өглөө 7.30 цагт сууна), Виктория
            дасгалжуулагчийн буудлын хаалга 1-5, Букингемийн ордны зам 164,
            Лондон, SW1W 9TP
          </li>
          <li>
            Виндзорын цайз нь хааны ордон, заримдаа бүхэлдээ ажилладаг тул Цайз
            эсвэл шилтгээн доторх төрийн орон сууцыг хаах хэрэгтэй богино
            хугацаанд. (энэ сонголтыг сонгосон бол)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantInfo;
