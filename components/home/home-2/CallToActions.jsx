import Link from "next/link";
import { Translate } from "../../translate";

const CallToActions = () => {
  const t = Translate().use;
  return (
    <section className="pt-80 pb-80 bg-green-1">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">{t.ready_to_travel}</h2>
              <p className="text-dark-1 sectionTitle__text mt-5 sm:mt-0">
                {t.ready_to_travel_text}
              </p>
            </div>
          </div>
          {/* End .col left */}

          <div className="col-auto">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <Link
                  href="/others-pages/login"
                  className="button px-40 h-60 -blue-1 text-blue-1 border-blue-1"
                >
                  {t.signin}
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </div>
              {/* End sign in button */}

              <div className="col-auto">
                <Link
                  href="/others-pages/signup"
                  className="button px-40 h-60 -blue-1 bg-yellow-1 text-dark-1"
                >
                  {t.register}
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </div>
              {/* End /register btn */}
            </div>
          </div>
          {/* End call right */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default CallToActions;
