import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import { Translate } from "../../translate";

const index = () => {
  const t = Translate().use;
  return (
    <footer className="footer -type-1 text-white bg-dark-2">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}
          </div>
        </div>
        {/* End footer top */}
        <div className="py-20  border-top-white-15">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
