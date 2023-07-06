import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/movieSlice";
import { selectNewDisney } from "../../features/movie/movieSlice";
import { selectTrending } from "../../features/movie/movieSlice";
import Footer from "../Footer";

const SeriesDetail = () => {
  const movies = useSelector(selectTrending);
  const movies1 = useSelector(selectNewDisney);
  const movies2 = useSelector(selectRecommend);
  return (
    <>
      <Container>
        <Content>
          {movies &&
            movies.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
          {movies1 &&
            movies1.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
          {movies2 &&
            movies2.map((movie, key) => (
              <Wrap key={key}>
                {movie.id}
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            ))}
        </Content>
      </Container>
      <Footer></Footer>
    </>
  );
};

// const Containerr = styled.div`
//   margin-top: 9vh;
//   background: url("/images/home-background.png") center center / cover no-repeat
//     fixed;
// `;

const Container = styled.div`
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
  margin-top: 60px;
  padding: 0 0 26px;
`;

const Content = styled.div`
  padding-top: 30px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default SeriesDetail;
