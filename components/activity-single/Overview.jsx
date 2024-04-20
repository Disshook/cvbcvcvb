const Overview = ({ description }) => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Товч мэдээлэл</h3>

          <p className="text-dark-1 text-15 mt-20">
            {/* Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle
            in one day is next to impossible. Designed specifically for
            travelers with limited time in London, this tour allows you to check
            off a range of southern England&lsquo;s historical attractions in
            just one day by eliminating the hassle of traveling between each one
            independently. Travel by comfortable coach and witness your guide
            bring each UNESCO World Heritage Site to life with commentary. Plus,
            all admission tickets are included in the tour price. */}
            {description}
          </p>

          <a
            href="#"
            className="d-block text-14 text-blue-1 fw-500 underline mt-10"
          >
            Show More
          </a>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Хэл</h5>
          <div className="text-15 mt-10">
            German, Chinese, Portuguese, Japanese, English, Italian, Chinese,
            French, Spanish
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Аялал цуцлах журам</h5>
          <div className="text-15 mt-10">
            Аялал эхлэхээс 24 цагийн өмнө аялалаа цуцласан тохиолдолд мөнгөө
            бүтнээр нь буцаан авах боломжтой
          </div>
        </div>

        <div className="col-12">
          <h5 className="text-16 fw-500">Онцлох</h5>
          <ul className="list-disc text-15 mt-10">
            <li>
              Travel between the UNESCO World Heritage sites aboard a
              comfortable coach
            </li>
            <li>Explore with a guide to delve deeper into the history</li>
            <li>Great for history buffs and travelers with limited time</li>
          </ul>
        </div>
      </div>

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">Аялал багтсан зүйлс</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i>
                  Нэвтрэх тасалбар
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i>
                  Хөтөч
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Хоол
                  унд, амттан
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Замын зардал
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Унаа
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
