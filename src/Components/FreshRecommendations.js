import React from "react";
import styled from "styled-components";
import SearchCard from "./SearchCard";

function FreshRecommendations() {
  return (
    <>
      <FreshRecommendationsContainer>
        <Heading>
          <h2>Fresh recommendations</h2>
        </Heading>
        <ProductContainer>
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/lf21yque1mcm2-PK/image;s=300x600;q=60"
            price="Rs 11,30,000"
            desc="Suzuki cervo limited edition"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/uk597429g2cb2-PK/image;s=300x600;q=60"
            price="Rs 16,999"
            desc="Liana Android"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/7shsekbe1uu61-PK/image;s=300x600;q=60"
            price="Rs 4,999"
            desc="IBOO TAB 7.0 Inch"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/j4rwklplxcj33-PK/image;s=300x600;q=60"
            price="Rs 20,000"
            desc="Inverter Machine avaiable for sale"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/9b3m398u7ep3-PK/image;s=300x600;q=60"
            price="Rs 48,000"
            desc="United Engine OK"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/51nkt1odkamp2-PK/image;s=300x600;q=60"
            price="Rs 35,000"
            desc="42 Inch Smart Led"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/xti60yniiwb31-PK/image;s=300x600;q=60"
            price="Rs 35,000"
            desc="Redmi note 9"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/wwx9mceyce9l1-PK/image;s=300x600;q=60"
            price="Rs 620"
            desc="One Plus 7T Pro Mclaren edition"
          />

          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/ykneztuiwwxq2-PK/image;s=300x600;q=60"
            price="Rs 450"
            desc="Cotton Kurti"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/l3nype6qo8wd1-PK/image;s=300x600;q=60"
            price="Rs 136,500"
            desc="Iphone 12"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/xyr71hh2j9ox2-PK/image;s=300x600;q=60"
            price="Rs 36,500"
            desc="Gaming Laptop"
          />
          <SearchCard
            image="https://apollo-singapore.akamaized.net/v1/files/09gdr7l0jil61-PK/image;s=300x600;q=60"
            price="Rs 2,625,00"
            desc="Toyota Gli Automatics"
          />
        </ProductContainer>
      </FreshRecommendationsContainer>
    </>
  );
}

export default FreshRecommendations;

const FreshRecommendationsContainer = styled.div`
  position: relative;
  top: 370px;
  margin-right: 50px;
  margin-left: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;

  > h2 {
    font-size: 26px;
    color: #002f34;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
