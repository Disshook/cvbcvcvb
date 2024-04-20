import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header3 from "../../components/header/header-3";
import Hero3 from "../../components/hero/hero-3";
import TopDestinations from "../../components/destinations/TopDestinations";
import Link from "next/link";
import Tours from "../../components/tours/Tours";
import Activity from "../../components/activity/Activity";
import Rentals from "../../components/rentals/Rentals";
import Cars from "../../components/cars/Cars";
import Cruise from "../../components/cruise/Cruise";
import Flights from "../../components/flight/Flights";
import Footer3 from "../../components/footer/footer-3";
import AddBanner from "../../components/home/home-3/AddBanner";
import WhyChoose from "../../components/home/home-3/WhyChoose";
import { Service } from "../../services";
import { useState, useEffect } from "react";
import Hotels from "../../components/hotels/Hotels";
import { Translate } from "../../components/translate";

const Home_3 = () => {
  const t = Translate().use;
  const [data, setData] = useState([]);
  useEffect(() => {
    Service.all().then((res) => {
      setData(res);
    });
    // console.log("data irlee");
    console.log(data);
  }, []);
  return (
    <>
      <Seo pageTitle="Home-3" />
      {/* End Page Title */}

      <Header3 />
      {/* End Header 3 */}

      <Hero3 />
      {/* End Hero 3 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t.tip}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">{t.tip_text}</p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row y-gap-20 pt-40">
            <AddBanner data={data?.news} />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End AddBanner Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Яагаад биднийг сонгох вэ
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Эдгээр алдартай газруудад санал болгох зүйл их байна
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Шилдэг очих газрууд</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">Онцлох аялал</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <TopDestinations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Destinations Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Санал болгож буй зочид буудлууд
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Илүү
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels data={data?.travel} />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* End  Hotel sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Хамгийн алдартай аялалууд
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх, малчин айлын ахуй амьдрал,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                илүү <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Тренд болж буй үйл ажиллагаа
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх, малчин айлын ахуй амьдрал,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Илүү <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Trending Activity Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Онцлох амралтын түрээс</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх, малчин айлын ахуй амьдрал,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Илүү <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Featured Rentals Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Алдартай машин түрээслэх
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх, малчин айлын ахуй амьдрал,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Илүү <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Popular Car Hire Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Онцлох аялалын хямдрал</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Бидний зорилго нь Монгол орныхоо үзэсгэлэнт, түүх дурсгалт
                  газруудыг үзүүлэх, малчин айлын ахуй амьдрал,
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                Илүү
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise data={data?.travel} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      {/* Popular Routes Sections */}

      <Footer3 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home_3), { ssr: false });
