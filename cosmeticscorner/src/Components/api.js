import axios from "axios";

// ------------- User Login and Signup Request ----------
export const postUserData = (name, phone, email, password) => {
  return axios
    .post(`http://localhost:3000/users`, {
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
  return axios.get(`http://localhost:3000/users`);
};

// --------------- Placed Order and Get Order Request --------------
export const postOrderData = (data) => {
  return axios
    .post(`http://localhost:3000/orders`, {
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
  return axios.get(`http://localhost:3000/orders`);
};

export const deleteOrderData = (id) => {
  return axios.delete(`http://localhost:3000/orders/${id}`);
};

// -------------- Home Page Related Request -------------
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

export const getHomeProductDetails = (id) => {
  return axios.get(`http://localhost:3000/home/${id}`);
};

// --------------- Skin Page Related Request -------------
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

export const getSkinProductDetails = (id) => {
  return axios.get(`http://localhost:3000/skin/${id}`);
};

// ------------- Hair Page Related Request --------------
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

export const getHairProductDetails = (id) => {
  return axios.get(`http://localhost:3000/hair/${id}`);
};

// --------------- PersonalCare Page Related Request -------------
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

export const getPersonalCareProductDetails = (id) => {
  return axios.get(`http://localhost:3000/personalcare/${id}`);
};

// -------------- Mom & Baby Page Related Request --------------
export const getMomBabyPageData = (params = {}) => {
  return axios.get(
    `http://localhost:3000/babycare`
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
  return axios.get(`http://localhost:3000/babycare/${id}`);
};

// -------------- Perfume Page Related Request ------------
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

export const getPerfumeProductDetails = (id) => {
  return axios.get(`http://localhost:3000/perfume/${id}`);
};

// -------------- Ayurved Page Related Request ------------------
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

export const getAyurvedProductDetails = (id) => {
  return axios.get(`http://localhost:3000/ayurved/${id}`);
};
