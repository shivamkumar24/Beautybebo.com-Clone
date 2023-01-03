import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CardProduct from "../CardProduct";
import { getPerfumePageData } from "../api";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@chakra-ui/react";

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
      {/* <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4",
        }}
      > */}
      <Grid
        width="90%"
        margin="auto"
        templateColumns={{ base: "repeat(1,auto)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        {data.map((el) => {
          return (
            <RouterLink to={`/perfume/${el.id}`}>
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
      </Grid>
      {/* </div> */}

      {/* ----------- Footer ---------- */}
      <Footer />
    </div>
  );
};

export default Perfume;
