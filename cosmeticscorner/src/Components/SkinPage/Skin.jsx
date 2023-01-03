import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { getSkinPageData } from "../api";
import CardProduct from "../CardProduct";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
// import { Select } from "@chakra-ui/react";

const Skin = () => {
  const [data, setData] = useState([]);
  // const [orderData, setOrderData] = useState("asc");

  // console.log(orderData);
  const handleGetData = () => {
    getSkinPageData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  };

  useEffect(() => {
    handleGetData();
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
          src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
          alt="Banner2"
          style={{ width: "75%", marginBottom: "5px", height: "400px" }}
        />
      </div>

      {/* ----------- Select Sorting By Price ------- */}
      {/* <div
        style={{
          width: "250px",
          display: "flex",
          marginLeft: "10%",
          justifyContent: "left",
        }}
      >
        <Select
          placeholder="Sort By Price"
          style={{
            fontWeight: "bold",
            border: "1px solid black",
            cursor: "pointer",
          }}
          onChange={(e) => setOrderData(e.target.value)}
        >
          <option value="asc">Low - High</option>
          <option value="desc">High - Low</option>
        </Select>
      </div> */}

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
            <RouterLink to={`/skin/${el.id}`}>
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

export default Skin;
