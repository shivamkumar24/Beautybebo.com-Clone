import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CardProduct from "../CardProduct";
import { getPersonalCarePageData } from "../api";
import { Link as RouterLink } from "react-router-dom";

const PersonalCare = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPersonalCarePageData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div>
      {/* ----------- Navbar ---------- */}
      <Navbar />

      {/* ----------- Banner1 --------- */}
      <div style={{ width: "100%", display: "flex" }}>
        <img
          src="https://www.beautybebo.com/pub/media/free-delivery.jpg"
          alt="Banner1"
          style={{ width: "25%", marginBottom: "5px", height: "400px" }}
        />
        <img
          src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
          alt="Banner2"
          style={{ width: "75%", marginBottom: "5px", height: "400px" }}
        />
      </div>

      {/* ----------- Products ------- */}
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4",
        }}
      >
        {data.map((el) => {
          return (
            <RouterLink to={`/personalcare/${el.id}`}>
              <CardProduct
                key={el.id}
                id={el.id}
                img={el.img}
                price={el.price}
                regularPrice={el.regular_price}
                reviewStar={el.review_star}
                reviewCount={el.review_count}
                title={el.title}
              />
            </RouterLink>
          );
        })}
      </div>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default PersonalCare;
