import PropTypes from 'prop-types';
import React from 'react';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({movie}) => (
    <Link to={`/${movie.id}`}>
      <Overdrive id={`toString(${movie.id})`}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt="{movie.title}" />
      </Overdrive>
    </Link>
);
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
