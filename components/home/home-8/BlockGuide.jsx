const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: "Боломжит үнэ",
      text: `Хямд үнээр чанартай үйлчилгээг авах боломж`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: "Хямд бөгөөд хурдан захиалга",
      text: `Сүүлийн үеийн тоног төхөөрөмжийн тусламжтайгаар хурдан бөгөөд хялбар аргаар захиалга хийх.`,
      delayAnim: "300",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: "Хэрэглэгчид ээлтэй",
      text: `Хэрэглэгч хүссэн үедээ тусламж авч болох байдал`,
      delayAnim: "500",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
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
