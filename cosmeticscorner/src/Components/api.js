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

export const getSkinPageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/skin`
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

export const getHairPageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/hair`
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

export const getPersonalCarePageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/personalcare`
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

export const getMomBabyPageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/mombaby`
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

export const getPerfumePageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/perfume`
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

export const getAyurvedPageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/ayurved`
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
