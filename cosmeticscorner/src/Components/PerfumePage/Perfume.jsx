import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CardProduct from "../CardProduct";
import { getPerfumePageData } from "../api";

const Perfume = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPerfumePageData()
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
            <CardProduct
              key={el.id}
              id={el.id}
              img={el.img}
              price={el.price}
              reviewStar={el.review_star}
              reviewCount={el.review_count}
              title={el.title}
            />
          );
        })}
      </div>

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Perfume;
