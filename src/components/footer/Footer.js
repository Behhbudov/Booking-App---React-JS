import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLists">
        <ul className="footerList">
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul className="footerList">
          <li>Homes</li>
          <li>Apartments</li>
          <li>Resorts</li>
          <li>Villas</li>
          <li>Hostels</li>
          <li>B&Bs</li>
        </ul>
        <ul className="footerList">
          <li>Unique places to stay</li>
          <li>All destinations</li>
          <li>Discover</li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles</li>
          <li>Travel communities</li>
        </ul>
        <ul className="footerList">
          <li>Car rental</li>
          <li>Flight finder</li>
          <li>Restaurant reservations</li>
          <li>Booking for Travel Agent</li>
          <li>Press center</li>
          <li>How we work</li>
        </ul>
        <ul className="footerList">
          <li>Coronavirus (COVID-19) FAQs</li>
          <li>About us</li>
          <li>Customer Service Help</li>
          <li>Partner help</li>
          <li>Careers</li>
          <li>Sustainability</li>
        </ul>
      </div>
      <div className="footerText">
        Copyright &copy; 2022 |
        <a href="https://github.com/Behhbudov"> Behhbudov coding</a>
      </div>
    </div>
  );
}

export default Footer;
