import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Categories() {
  return (
    <div>
      <CategoriesContainer>
        <ul>
          <li>
            <a href=""> All Categories</a>
          </li>

          <li>
            <ExpandMoreIcon />
          </li>

          <li>
            <a href="">Mobile Phones</a>
          </li>

          <li>
            <a href="">Cars</a>
          </li>

          <li>
            <a href="">Motorcycles</a>
          </li>

          <li>
            <a href="">Houses</a>
          </li>

          <li>
            <a href="">Tv-Video-Audio</a>
          </li>

          <li>
            <a href="">Tablets</a>
          </li>

          <li>
            <a href="">Land & Plots</a>
          </li>
        </ul>
      </CategoriesContainer>
    </div>
  );
}

export default Categories;

const CategoriesContainer = styled.div`
  display: flex;
  width: 58%;
  position: relative;
  align-items: center;
  margin-top: 12px;

  > ul {
    display: flex;
    list-style-type: none;
  }

  > ul > li > a {
    text-decoration: none;
    margin-right: 8px;
    margin-left: 8px;
    font-size: 15px;
    color: #002f34;
    font-family: 'Roboto', sans-serif;
  }

  > ul > li > a:hover {
    color: aqua;
    cursor: pointer;
  }
`;
