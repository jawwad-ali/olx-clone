import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

function LatestSearch() {
  return (
    <>
      <LatestSearchContainer>
        <Heading>
          <h2>Based on your latest Search</h2>
          <a href="#">View more</a>
        </Heading>
        <Xyz>
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/wwx9mceyce9l1-PK/image;s=300x600;q=60"
            price="Rs 620"
            desc="One Plus 7T Pro Mclaren edition"
          />

          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/6oem65kw9pl43-PK/image;s=300x600;q=60"
            price="Rs 26,00,000"
            desc="60 yard House west open"
          />

          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/3gxf2tgy2e31-PK/image;s=300x600;q=60"
            price="Rs 23,000"
            desc="Super Power 2015"
          />

          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/1s5d46ivt97j3-PK/image;s=300x600;q=60"
            price="Rs 12,500,000 "
            desc="4 Beds"
          />
        </Xyz>
      </LatestSearchContainer>
    </>
  );
}

export default LatestSearch;

const LatestSearchContainer = styled.div`
  position: relative;
  top: 350px;
  background-color: rgba(0, 47, 52, 0.03);
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  padding: 10px;
`;

const Xyz = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: -50px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;

  > h2 {
    font-size: 22px;
    color: #002f34;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }

  > a {
    color: #002f34;
    border-bottom: 2px solid #002f34;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    height: 18px;
    font-weight: bold;
  }
`;
