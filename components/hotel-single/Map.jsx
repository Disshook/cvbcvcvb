const Map = ({ data }) => {
  // console.log(data.plan);

  return (
    <div
      className="flex-center"
      style={{
        backgroundImage: `url(https://emt.tanuweb.cloud/uploads/${data})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "180px",
      }}
    ></div>
  );
};

export default Map;
