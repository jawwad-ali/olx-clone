import React from "react";
import "./SearchCard.css";

function SearchCard({ image, iconssss, price, desc }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div class="top-div">
            <span>
              <p>FEATURED</p>
            </span>
            <img src={image} alt="product" />
          </div>

          <div class="bottom-div">
            <p className="price">{price}</p>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
