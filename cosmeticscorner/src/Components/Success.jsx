import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Success = () => {
  return (
    <div>
      {/* ---------------- Navbar -------------- */}
      <Navbar />

      {/* ---------------- Success Body ---------------- */}

      <div>
        <img
          src="https://media.tenor.com/BntXpMlrGuEAAAAC/check-correct.gif"
          alt="success"
          style={{
            width: "600px",
            height: "450px",
            margin: "auto",
            textAlign: "center",
          }}
        />
      </div>

      {/* ------------------ Footer ----------------- */}
      <Footer />
    </div>
  );
};

export default Success;
