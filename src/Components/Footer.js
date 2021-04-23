import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <FooterContainer>
        {/* <p>&copy; Airbnb clone! No right reserved - this is a demo</p>
        <p>Privacy·Terms·Sitemap</p> */}
        <FooterText>
          &copy; Olx clone! No right reserved - this is a demo
        </FooterText>
        <FooterText>Privacy·Terms·Sitemap</FooterText>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;
  position: relative;
  top: 400px;
`;
const FooterText = styled.div`
  padding: 5px;
  font-size: 14px;
`;
