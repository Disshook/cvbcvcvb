import Link from "next/link";
import footerDataContent from "../../../data/footerContent";
import { Translate } from "../../translate";

const FooterContent = () => {
  const t = Translate().use;
  const footerDataContent = [
    {
      id: 1,
      title: `${t.company}`,
      menuList: [
        { name: `${t.about}`, routerPath: "/others-pages/about" },
        { name: `${t.home}`, routerPath: "/" },
      ],
    },
    {
      id: 2,
      title: `${t.support}`,
      menuList: [
        { name: `${t.news}`, routerPath: "/blog/blog-list-v1" },
        { name: `${t.travel_name}`, routerPath: "/tour/tour-list-v3" },
      ],
    },
  ];
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
