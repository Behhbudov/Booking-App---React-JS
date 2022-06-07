import React, { useState } from "react";
import "./Hotel.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321487672.jpg?k=d28ce0589b3218971893af70562305cb7e13357190d75f5b65282b3997001e59&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747131.jpg?k=e80e77030a5d8bcdc163bd7958207e51cf96e41c886a2c27578e00ff12fa0e1a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747027.jpg?k=b9ef5f87f48ad37214a495545fbaf85de0a19ef354bdd659345320989a7590b0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747025.jpg?k=19bf2dd0f478f14aaee3d1f73a4d8aad8bda66b6555af6f22b05f1c17d1d2458&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747028.jpg?k=400f80f5129c1964a21abe64cb0dd585ad580d527abd66d49882d33af22cc695&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330747032.jpg?k=87b5ee11812ea6468503196c340649e48cdcba0eb594932ecd947c93d3e26436&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over AZN 114 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Madrid</h1>
              <p className="hotelDesc">
                Located in Madrid, Bob W Chueca has city views and free WiFi, a
                5-minute walk from Gran Via and half a kilometer from Puerta del
                Sol. Every unit has a private bathroom and shower, air
                conditioning, a flat-screen TV and a microwave. There's a
                seating and/or dining area in some units. Popular points of
                interest near the condo hotel include Thyssen-Bornemisza Museum,
                Plaza Mayor and Mercado San Miguel. The nearest airport is
                Adolfo Suarez Madrid-Barajas Airport, 12.9 km from Bob W Chueca.
                This is our guests' favorite part of Madrid, according to
                independent reviews. Couples in particular like the location –
                they rated it 9.7 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the real heart of Madrid, this property has an
                excellent location score of 9.6!
              </span>
              <h2>
                <b>AZN 114</b> (1 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
