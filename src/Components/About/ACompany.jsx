import React from "react";
import teamwork from "../../assets/teamwork1.png";

const ACompany = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div onContextMenu={preventDefault}>
        <img
          src={teamwork}
          alt="RJ Logo"
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
            paddingTop: "0px",
          }}
        />
      </div>
      <div
        style={{
          width: "80%",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "justify",
        }}
      >
        <h1 style={{ marginTop: "20px", textAlign: "left" }}>ABOUT US</h1>
        <h5 style={{ marginBottom: "30px" }}>
          Our team of young and talented social media and brand managers has the
          competent experience of delivering above-expectation results that have
          created successful trademarks and long-lasting brands among public
          figures and consumer products. Established in 2018 in Ayala-Alabang,
          Muntinlupa City, Philippines, the team has been aiming to help
          individual personalities, public figures, as well as small and medium
          businesses maximize their online presence through cost-effective and
          affordable online promotions and campaign marketing.
        </h5>
        <h1 style={{ marginBottom: "20px", textAlign: "left" }}>MISSION</h1>
        <h5 style={{ marginBottom: "30px" }}>
          With God-given talents, combined with the experience and dedication of
          our team, we endeavor to render our services with distinction and
          excellence.
        </h5>
        <h1 style={{ marginBottom: "20px", textAlign: "left" }}>VISION</h1>
        <h5 style={{ marginBottom: "20px" }}>
          We are committed to building communities around lifetime brands.
        </h5>
      </div>
    </div>
  );
};

export default ACompany;
