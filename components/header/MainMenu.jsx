import Link from "next/link";
import { homeItems, pageItems } from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { isActiveParentChaild, isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { Translate } from "../translate";


const MainMenu = ({ style = "", data = [] }) => {
  const router = useRouter();
  const t = Translate().use;

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10 capitalize">{t.home}</span>
          </Link>
        </li>
        {/* End home page menu */}
        <li
          className={`${isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href="/tour/tour-list-v3">
            <span className="mr-10">{t.travel_name}</span>
            <i className="icon icon-chevron-sm-down" />
          </Link>
          <ul className="subnav">
            {data?.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={`/tour/tour-list-v3?category=${menu._id}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End categories menu items */}

        {/* End blogIems */}
        <li
          className={router.pathname === "/blog/blog-list-v1" ? "current" : ""}
        >
          <Link href="/blog/blog-list-v1">{t.news}</Link>
        </li>
        <li
          className={router.pathname === "/tip/tip-list" ? "current" : ""}
        >
          <Link href="/tip/tip-list">{t.lolo}</Link>
        </li>
        {/* End pages items */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/others-pages/about">{t.about}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
