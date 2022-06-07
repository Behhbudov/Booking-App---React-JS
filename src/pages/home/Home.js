import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
import FeaturedHotels from "../../components/featuredHotels/FeaturedHotels";
import MailList from "../../components/mailList/MailList";
import "./home.css";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes visitors love</h1>
        <FeaturedHotels />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
