import axios from "axios";

// ------------- User Login and Signup Request ----------
export const postUserData = (name, phone, email, password) => {
  return axios
    .post(`https://mock-server-app-n23r.onrender.com/users`, {
      id: Math.floor(Math.random() * 1000),
      name: name,
      phone: phone,
      email: email,
      password: password,
    })
    .then((res) => {
      alert("Account Created Successfully");
    })
    .catch((err) => alert("Account Creation Failed"));
};

export const getUserData = () => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/users`);
};

// --------------- Placed Order and Get Order Request --------------
export const postOrderData = (data) => {
  return axios
    .post(`https://mock-server-app-n23r.onrender.com/orders`, {
      id: data.id,
      img: data.img,
      price: data.price,
      title: data.title,
    })
    .then((res) => {
      alert("Product Added to the Cart");
    })
    .catch((error) => {
      alert("Product not added to the Cart. Some issue happpend");
    });
};

export const getOrderData = () => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/orders`);
};

export const deleteOrderData = (id) => {
  return axios.delete(`https://mock-server-app-n23r.onrender.com/orders/${id}`);
};

// -------------- Home Page Related Request -------------
export const getHomePageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/home`
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

export const getHomeProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/home/${id}`);
};

// --------------- Skin Page Related Request -------------
export const getSkinPageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/skin`
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

export const getSkinProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/skin/${id}`);
};

// ------------- Hair Page Related Request --------------
export const getHairPageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/hair`
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

export const getHairProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/hair/${id}`);
};

// --------------- PersonalCare Page Related Request -------------
export const getPersonalCarePageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/personalcare`
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

export const getPersonalCareProductDetails = (id) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/personalcare/${id}`
  );
};

// -------------- Mom & Baby Page Related Request --------------
export const getMomBabyPageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/babycare`
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

export const getMomBabyProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/babycare/${id}`);
};

// -------------- Perfume Page Related Request ------------
export const getPerfumePageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/perfume`
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

export const getPerfumeProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/perfume/${id}`);
};

// -------------- Ayurved Page Related Request ------------------
export const getAyurvedPageData = (params = {}) => {
  return axios.get(
    `https://mock-server-app-n23r.onrender.com/ayurved`
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

export const getAyurvedProductDetails = (id) => {
  return axios.get(`https://mock-server-app-n23r.onrender.com/ayurved/${id}`);
};
