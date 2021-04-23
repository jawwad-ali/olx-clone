import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function Header() {
  return (
    <>
      <HeaderContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
          alt="olx"
        />
        <HeaderLeft>
          <SearchIcon />
          <input placeholder="Karachi , Sindh" />
          <ExpandMoreIcon />
        </HeaderLeft>

        <HeaderCenter>
          <input placeholder="Find Cars, Mobile Phones and more... " />
        </HeaderCenter>

        <SearchIconDiv>
          <SearchIcon
            style={{ height: "35px", width: "35px", marginTop: "8px" }}
          />
        </SearchIconDiv>

        <HeaderRight>
          <button className="login_btn">Login</button>
          <button className="sell_btn">
            <AddIcon /> <span>Sell</span>
          </button>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(0, 47, 52, 0.03);
  z-index: 10;

  > img {
    height: 50px;
    width: 100px;
    margin-left: 25px;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.2;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 8px;
  color: gray;
  border: 2px solid #002f34;
  text-align: left;
  width: 200px;
  height: 31px;

  > input {
    background-color: transparent;
    border: none;
    text-align: left;
    min-width: 2vw;
    outline: 0;
    color: black;
    font-family: "Roboto", sans-serif;
    ::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
    }
  }

  .MuiSvgIcon-root {
    color: #002f34;
    font-size: 30px;
  }
`;

const HeaderCenter = styled.div`
  flex: 0.6;
  margin-left: 20px;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 14.5px;
  color: gray;
  border: 2px solid #002f34;
  border-radius: 4px 0 0 4px;
  text-align: left;
  width: 200px;

  > input {
    background-color: transparent;
    border: none;
    text-align: left;
    min-width: 50vw;
    outline: 0;
    color: black;
    font-family: "Roboto", sans-serif;

    ::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      opacity: 0.8;
    }
  }
`;

const SearchIconDiv = styled.div`
  min-width: 48px;
  height: 51px;
  display: flex;
  cursor: pointer;
  background-color: #002f34;
  border-radius: 1px;

  > .MuiSvgIcon-root {
    min-width: 52px;
    height: 50px;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.2;
  justify-content: space-around;
  margin-left: 20px;

  > .login_btn {
    align-items: center;
    border: none;
    font-size: 16px;
    background: transparent;
    color: #002f34;
    font-weight: bold;
    border-bottom: 2px solid #002f34;
    font-family: "Roboto", sans-serif;
    height: 30px;
    margin-top: 10px;
  }

  > .sell_btn {
    display: flex;
    border: 5px solid transparent;
    border-radius: 999px;
    padding: 10px 25px;
    background: linear-gradient(white, white),
      linear-gradient(to top right, aqua 33.33%, yellow 33.33%) no-repeat center
        center;
    background-clip: padding-box, border-box;
    background-size: 100% 100%, 110% 150%;
    color: black;
    margin-left: -30px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
  > .sell_btn > span {
    padding-top: 2px;
  }
`;
