const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Үнийн баталгаа",
      text: `Бага зардлаар чанартай аялалыг авах боломж`,
      delayAnim: "0",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Хялбар, хурдан",
      text: `Төлбөрийн уян хатан шийдлээр хаанаас ч аялалаа захиалах боломж`,
      delayAnim: "50",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "24/7 тусламж",
      text: `Хэрэглэгчидэд цаг алдалгүй туслах оператор`,
      delayAnim: "100",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="d-flex pr-30">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="size-50" />
            </div>
            <div className="ml-15">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
