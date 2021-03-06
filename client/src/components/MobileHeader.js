import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ORlogo from "../assets/ORlogo.png";
import { FiMenu, FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";

const MobileHeader = () => {
  const currentUserStatus = useSelector((state) => state.currentuser.status);

  return (
    <MobileWrapper>
      <Visible>
        <HomeLink to="/">
          {" "}
          <LogoImg
            src={ORlogo}
            alt="open relationship logo"
            style={{ borderRadius: "5px" }}
          />
        </HomeLink>
        <RightSide>
          <Search>
            <SearchInput>
              <SearchBar />
            </SearchInput>
            <FiSearch size={30} />
          </Search>
          <Hamburger>
            <Burger>
              <FiMenu size={40} />
            </Burger>
            <MobileNav>
              <Spacer></Spacer>
              {currentUserStatus === "logged-in" && (
                <>
                  <StyledLink to="/scout">SCOUT</StyledLink>
                  <StyledLink to="/messages">MESSAGES</StyledLink>
                  <StyledLink to="/myaccount">MY ACCOUNT</StyledLink>
                </>
              )}
              {currentUserStatus === "idle" && (
                <>
                  <StyledLink to="/scout">SCOUT</StyledLink>
                  <StyledLink to="/login">LOGIN</StyledLink>
                </>
              )}
              {currentUserStatus === "loading" && (
                <>
                  <StyledLink to="/scout">SCOUT</StyledLink>
                  <StyledLink to="/login">LOGIN</StyledLink>
                </>
              )}
            </MobileNav>
          </Hamburger>
        </RightSide>
      </Visible>
    </MobileWrapper>
  );
};

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const HomeLink = styled(Link)``;
const LogoImg = styled.img`
  height: 80px;
  width: 80px;
`;

const MobileWrapper = styled.div`
  background-color: #004d00;
  color: #ff0032;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Visible = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Spacer = styled.div`
  height: 30px;
  background-color: transparent;
`;

const Hamburger = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40px;
`;

const Burger = styled.div`
  color: #b3b3ff;
  text-align: right;
  height: 40px;
`;

const MobileNav = styled.nav`
  position: absolute;
  top: 70px;
  right: 0;
  flex-direction: column;
  display: none;
  color: #79d2a6;
  ${Hamburger}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
  }
`;

const StyledLink = styled(Link)`
  padding: 5px;
  color: #004d00;
  background-color: #b3b3ff;

  &: hover {
    background-color: #fcffe6;
    color: #004d00;
  }
`;

const Search = styled.div`
  padding: 5px;
  color: var(--lavender);
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;

  /* justify-content: flex-end; */
  &: hover {
    background-color: var(--pale-yellow);
    color: var(--forest-green);
  }
`;

const SearchInput = styled.div`
  display: none;
  position: relative;

  ${Search}:hover & {
    display: flex;
  }
`;
export default MobileHeader;
