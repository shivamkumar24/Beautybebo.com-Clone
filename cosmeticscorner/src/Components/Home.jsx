import React, { useState, useEffect } from "react";
import { getHomePageData } from "./api";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CardProduct from "./CardProduct";
import { Link as RouterLink } from "react-router-dom";
import { Grid } from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHomePageData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div>
      {/* ---------Navbar-------- */}
      <Navbar />

      {/* ----------- Banner1 --------- */}
      <div style={{ width: "100%" }}>
        <img
          src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
          alt="Banner1"
          style={{ width: "100%", marginBottom: "5px", height: "400px" }}
        />
        <img
          src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"
          alt="Banner2"
          style={{ width: "85%", margin: "auto", height: "200px" }}
        />
      </div>

      {/* --------- Products -------- */}
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
            <RouterLink to={`/home/${el.id}`}>
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

      {/* --------- Banner2 ------- */}
      <div style={{ width: "100%" }}>
        <img
          src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"
          alt="Banner1"
          style={{ width: "80%", margin: "auto", height: "280px" }}
        />
      </div>

      {/* --------- Home Page Paragraph --------- */}
      <div>
        <p
          style={{ fontsize: "22px", fontWeight: "bold", letterSpacing: "2px" }}
        >
          Welcome to Beauty Products Online Shopping India- Cosmetics Corner
        </p>
        <p style={{ width: "80%", margin: "auto" }}>
          If you are looking for a flawless radiant face outlook for a special
          occasion, then we have the perfect tips for you. As you must already
          know, the conspicuous flawless outlook you want for your wedding, a
          date, a dinner party or for a modelling competition is only achieved
          through makeup. Don't get me wrong, you are naturally beautiful,
          that's obvious. But everyone else is, so how will you will you ensure
          that you are different? Read on for hot irresistible tips before you
          buy beauty products online! Clean Your Face First! Before embarking on
          any makeup, always ensure that your face is clean. Need some
          assistance in absolute cleaning? Visit our range of face wash beauty
          products online for your best pick. We have made it our duty to
          carefully select the best products for you, so that you don't
          experience breaks and allergies after use. So now you can be confident
          that your buy cosmetic online shopping will be worth your time and
          effort. Wondering then how you will make a choice among the spectrum
          available? Most of our products are purely natural in ingredient, so
          you can as well check for your favorite ingredient combination. If not
          sure, we are still here for you. We can help narrow down your options,
          together with you. Apply a Moisturizer
        </p>
      </div>

      {/* ---------- Footer --------- */}
      <Footer />
    </div>
  );
};

export default Home;
