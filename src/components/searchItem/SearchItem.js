import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

function SearchItem({ type }) {
  const navigate = useNavigate();

  const handleSee = () => {
    navigate("/hotels/:id");
  };
  return (
    <div className="searchItems">
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/321487672.webp?k=410b152eeff9767cbba5063fca1296a43f0f6399ebb05c94b929fa7b3481d19b&o=&s=1"
          alt="Bob W Chueca"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Bob W Chueca</h1>
          <span className="searchItemDistance">0.8 km from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Chueca Design Studio</span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 15m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 145</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/317971109.webp?k=b092e9148a3991d1b876ee4540b0531bed5cd7c1b69ff55223992f5551771495&o=&s=1"
          alt="Preciados"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Preciados</h1>
          <span className="searchItemDistance">500 m from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Deluxe Double Room</span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 20m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.7</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 240</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/296552320.webp?k=57c0f108e4ce87ca17ced600a09d2ceb43c0446e70bd9a8f7824c164abb0a5c3&o=&s=1"
          alt="B&B Hotel Madrid Centro Plaza Mayor"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">
            B&B Hotel Madrid Centro Plaza Mayor
          </h1>
          <span className="searchItemDistance">300 m from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Twin Room</span>
          <span className="searchItemFeatures">
            Entire studio • 2 bathroom • 25m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.8</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 320</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/303214974.webp?k=c390f2ed76eaa0cb367f976b6c2c89c7ad6907a3d337103cdcf00189eea72467&o=&s=1"
          alt="Wellington Hotel & Spa"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Wellington Hotel & Spa</h1>
          <span className="searchItemDistance">1.7 km from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Executive Double Room</span>
          <span className="searchItemFeatures">
            Entire studio • 2 bathroom • 40m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 519</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/163353933.webp?k=e737b079b8c1991c72eeb22b216b968397c6a6cbb402ba53dd30431bbe58a032&o=&s=1"
          alt="Intur Palacio San Martin"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Intur Palacio San Martin</h1>
          <span className="searchItemDistance">350 m from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Economy Double Room</span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 20m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.7</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 209</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/102228837.webp?k=50fccb97b1e6861bf2a6654f094d4c270c4bf8e9b7e012fdb7452a0a0341c062&o=&s=1"
          alt="One Shot Luchana 22"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">One Shot Luchana 22</h1>
          <span className="searchItemDistance">1.5 km from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">
            Standard Double or Twin Room
          </span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 18m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.7</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 156</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/196988832.webp?k=c569c4d98d30da49976db12697d4c8a02af82cd9d48c1dc1e122849c153abb17&o=&s=1"
          alt="Hotel Villa Real"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Hotel Villa Real</h1>
          <span className="searchItemDistance">0.6 km from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">
            Superior Double or Twin Room
          </span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 25m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.8</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 278</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/65063634.webp?k=2bbca1c7c3d4b99bf4edd1748dad22b647ff0d14051594b3818df180464df659&o=&s=1"
          alt="Catalonia Gran Vía Madrid"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Catalonia Gran Vía Madrid</h1>
          <span className="searchItemDistance">500 m from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Double or Twin Room</span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 25m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 235</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square200/198530394.webp?k=4f3812763e1f2aebc8f6826757b8443c1f25d86e99ba6ce4f6f271dcc568d039&o=&s=1"
          alt="Hotel Mayorazgo"
          className="searchItemImg"
        />
        <div className="searchItemDesc">
          <h1 className="searchItemTitle">Hotel Mayorazgo</h1>
          <span className="searchItemDistance">0.8 km from center</span>
          <span className="searchItemTaxiOption">Free airport taxi</span>
          <span className="searchItemSubtitle">Double or Twin Room</span>
          <span className="searchItemFeatures">
            Entire studio • 1 bathroom • 20m²
          </span>
          <span className="searchItemCancelOption">Free cancellation</span>
          <span className="searchItemCancelOptionSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="searchItemRating">
            <span>Excellent</span>
            <button>8.6</button>
          </div>
          <div className="searchItemDetailTexts">
            <span className="searchItemPrice">AZN 246</span>
            <span className="searchItemTaxOption">Includes taxes and fees</span>
            <button className="searchItemCheckButton" onClick={handleSee}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
