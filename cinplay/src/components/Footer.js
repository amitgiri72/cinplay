import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterMain>
      <h4> &copy; amitgiri, All Right Reserved </h4>
      <p>
        <Link to="/home">Home</Link>|<Link to="/originaldetail">Originals</Link>
        |<Link to="/moviedetail">Movies</Link>|
        <Link to="/seriesdetail">Series</Link>
      </p>
    </FooterMain>
  );
};

const FooterMain = styled.footer`
  width: 100%;
  color: white;
  padding: 25px;
  margin-left: 0;
  background-color: black;
  h4 {
    text-align: center;
  }
  p {
    text-align: center;
    margin: 3px;
    a {
      text-align: center;
      text-decoration: none;
      color: aliceblue;
      padding: 10px;

      &:hover {
        color: #00d4ff;
      }
    }
  }
`;

export default Footer;
