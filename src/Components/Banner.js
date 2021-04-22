import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <div>
      <BannerContainer></BannerContainer>
    </div>
  );
}

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  background-image: url("https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg");
  height: 252px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: absolute;
  top: 112px;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 8px;
`;
