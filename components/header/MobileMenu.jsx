"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { Translate } from "../translate";
import LanguageMegaMenu from "./LanguageMegaMenu";

const MobileMenu = () => {
  const t = Translate().use;
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/booking-pages/arvai..png" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href="/home/home_2"
                  className={
                    router.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              {t.home}
            </MenuItem>
            {/* End  All Home Menu */}

            <MenuItem
              component={
                <Link
                  href={"/tour/tour-list-v3"}
                  className={
                    router.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              {t.travel_name}
            </MenuItem>
            {/* End  All Categories Menu */}
            <MenuItem
              component={
                <Link
                  href={"/blog/blog-list-v1"}
                  className={
                    router.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              {t.news}
            </MenuItem>
            <MenuItem
              component={
                <Link
                  href={"/others-pages/about"}
                  className={
                    router.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              {t.about}
            </MenuItem>
            {/* End  Desitinations Menu */}
            {/* End  Desitinations Menu */}
            {/* End  All Blog Menu */}

            {/* <SubMenu label="Pages">
              {pageItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={item.routePath}
                      className={
                        isActiveLink(item.routePath, router.asPath)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Pages Menu */}

            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
      <hr />
      <LanguageMegaMenu />
      <hr />

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
