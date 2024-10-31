import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSettingsState, useSettingsDispatch } from "./../context/settings";
import { getSettings } from "./../actions/settings";

import Loader from "./utils/loader";

const Navbar = () => {
  const { pathname } = useRouter();

  const dispatchSettings = useSettingsDispatch();
  const { social, loading } = useSettingsState();

  useEffect(() => {
    getSettings(dispatchSettings);
  }, [dispatchSettings]);

  return (
    <Fragment>
      {loading ? (
        <div className="index_loader">
          <Loader />
        </div>
      ) : (
        <nav>
          <div>
            <img
              src="https://res.cloudinary.com/etreeningud/image/upload/c_scale,h_113/v1613366877/utils/logo.png"
              alt="logo"
            />
          </div>
          <div>
            <Link href="/" className={pathname === "/" ? "active_nav" : null}>
              Esileht
            </Link>
            <Link
              href="/fitness"
              className={pathname.includes("fitness") ? "active_nav" : null}
            >
              Treeningud
            </Link>
            <Link
              href="/posts"
              className={pathname.includes("posts") ? "active_nav" : null}
            >
              Blogi
            </Link>
            <Link href="/#contact">Kontakt</Link>
          </div>
          <div>
            {social &&
              social.map((el) => (
                <a target="_blank" rel="noreferrer" key={el._id} href={el.link}>
                  <i className={el.icon} />
                </a>
              ))}
          </div>
        </nav>
      )}
    </Fragment>
  );
};

export default Navbar;
