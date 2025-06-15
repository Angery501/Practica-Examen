import { useState } from 'react'
import { MovieModal } from './MovieModal'
import './estilos.css'

export function Peliculas() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const movies = [
    {
      id: 1,
      title: "Zona Sur",
      summary: "Película boliviana que muestra la vida de una familia de clase alta en La Paz."
    },
    {
      id: 2,
      title: "Yawar Mallku",
      summary: "Clásico del cine boliviano que aborda temas de esterilización forzada."
    },
    {
      id: 3,
      title: "El Cementerio de los Elefantes",
      summary: "Drama que explora la vida de exmilitares en Bolivia."
    },
    {
      id: 4,
      title: "Vuelve Sebastiana",
      summary: "Documental sobre la cultura Chipaya en Bolivia."
    },
    {
      id: 5,
      title: "Utama",
      summary: "Reciente éxito del cine boliviano sobre una pareja de ancianos en el altiplano."
    }
  ]

  const openModal = (movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="peliculas-page">
      <h2>Películas Bolivianas</h2>
      <div className="movies-container">
        {movies.map(movie => (
          <button 
            key={movie.id}
            className="movie-button"
            onClick={() => openModal(movie)}
          >
            {movie.title}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <MovieModal 
          movie={selectedMovie}
          onClose={closeModal}
        />
      )}
    </div>
  )
}