import axios from "axios";

export const getHomePageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/home`
    //    {
    //     params: {
    //   _page: params.page,
    //   _limit: params.limit,
    //   _sort: params.sort,
    //   _order: params.order,
    // },
    //   }
  );
};
