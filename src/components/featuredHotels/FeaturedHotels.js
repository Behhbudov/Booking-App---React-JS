import React from "react";
import "./FeaturedHotels.css";

function featuredHotels() {
  return (
    <div className="featuredHotels">
      <div className="featuredHotelsItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/9700055.webp?k=641042b4d4fd57057b7dbf8ff4ca9f8426151dcb66bb2c5db6b4cd39d8e93cd0&o=&s=1"
          alt="TURIM Europa Hotel"
          className="featuredHotelsImg"
        />
        <span className="featuredHotelsName">TURIM Europa Hotel</span>
        <span className="featuredHotelsCity">Lisbon</span>
        <span className="featuredHotelsPrice">Starting from AZN 512</span>
        <div className="featuredHotelsRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHotelsItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/64561249.webp?k=441569834f648cc33ab4ade50fbdd1f290b60ae80b3b5e19359ba5440087aa68&o=&s=1"
          alt="Browns Central Hotel"
          className="featuredHotelsImg"
        />
        <span className="featuredHotelsName">Browns Central Hotel</span>
        <span className="featuredHotelsCity">Rio de Janeiro</span>
        <span className="featuredHotelsPrice">Starting from AZN 340</span>
        <div className="featuredHotelsRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHotelsItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/344283828.webp?k=1fc76b2efee9496d2cccf35ad4ae0f8895197a7ddfb3162d932aa368de980fab&o=&s=1"
          alt="TURIM Terreiro do Paço Hotel"
          className="featuredHotelsImg"
        />
        <span className="featuredHotelsName">TURIM Terreiro do Paço Hotel</span>
        <span className="featuredHotelsCity">Lisbon</span>
        <span className="featuredHotelsPrice">Starting from AZN 235</span>
        <div className="featuredHotelsRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHotelsItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/82116136.webp?k=98aef1c4233a0d8104db49a37f90d4eb496244c4d4af900c5e1709cd90f01a04&o=&s=1"
          alt="Appartamento Benincampi"
          className="featuredHotelsImg"
        />
        <span className="featuredHotelsName">Appartamento Benincampi</span>
        <span className="featuredHotelsCity">Rome</span>
        <span className="featuredHotelsPrice">Starting from AZN 150</span>
        <div className="featuredHotelsRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default featuredHotels;
