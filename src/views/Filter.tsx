import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'

const API_KEY = import.meta.env.VITE_API_KEY

type MovieGenre = 0 | 28 | 35

type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: MovieGenre[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

const fetchPopularMovies = () =>
  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(({ data }) => data.results as Movie[])

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

const MovieCardContainer = styled.div`
  margin: 1rem 0;

  > h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 0.8rem;
    height: 2rem;
  }

  > img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
  }
`

interface IMovieCardProps {
  movie: Movie
}

const MovieCard: FunctionComponent<IMovieCardProps> = ({ movie }) => {
  return (
    <MovieCardContainer
      as={motion.div}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
    </MovieCardContainer>
  )
}

const FilterContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`

interface IButtonProps {
  active?: boolean
}

const Button = styled.button<IButtonProps>`
  padding: 0.5rem 1rem;
  min-width: 5rem;
  border: none;
  background: ${({ active }) => (active ? 'rgb(65, 98, 168)' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'rgb(65, 98, 168)')};
  border-radius: 1rem;
  border: 2px solid rgb(65, 98, 168);
  font-weight: bold;
  cursor: pointer;
`

interface IFilterProps {
  movies: Movie[]
  setFilteredMovies: (movies: Movie[]) => void
}

const Filter: FunctionComponent<IFilterProps> = ({
  movies,
  setFilteredMovies,
}) => {
  const [activeGenre, setActiveGenre] = useState<MovieGenre>(0)

  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredMovies(movies)
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      )

      setFilteredMovies(filteredMovies)
    }
  }, [activeGenre])

  return (
    <FilterContainer>
      <Button active={activeGenre === 0} onClick={() => setActiveGenre(0)}>
        All
      </Button>
      <Button active={activeGenre === 35} onClick={() => setActiveGenre(35)}>
        Comedy
      </Button>
      <Button active={activeGenre === 28} onClick={() => setActiveGenre(28)}>
        Action
      </Button>
    </FilterContainer>
  )
}

const FilterView = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetchPopularMovies().then((fetchedMovies) => {
      setMovies(fetchedMovies)
      setFilteredMovies(fetchedMovies)
    })
  }, [])

  return (
    <main style={{ color: 'white', padding: '5% 10%' }}>
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />

      <MoviesContainer as={motion.div} layout>
        <AnimatePresence>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </MoviesContainer>
    </main>
  )
}

export default FilterView
