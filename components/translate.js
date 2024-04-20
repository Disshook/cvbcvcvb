import { useRouter } from "next/router";
import en from "./locales/en";
import mn from "./locales/mn";
import kr from "./locales/kr";
import chn from "./locales/chn";
import jp from "./locales/jp";
export const Translate = () => {
  const { locale, push, asPath } = useRouter();
  const handle = (l) => () => {
    push(asPath, asPath, { locale: l });
  };
  let use;
  switch (locale) {
    case "en":
      use = en;
      break;
    case "kr":
      use = kr;
      break;
    case "jp":
      use = jp;
      break;
    case "chn":
      use = chn;
      break;
    case "mn":
      use = mn;
      break;
    default:
      break;
  }
  return { use, handle };
};
