import { getAllData, getSingleTravel, getSingle } from "./otherService";

export const Service = {
  all: getAllData,
  travel: {
    single: getSingleTravel,
  },
  single: getSingle,
};
