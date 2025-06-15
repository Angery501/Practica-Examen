import { ActorCard } from './ActorCard'
import './estilos.css'

export function Principal() {
  const actors = [
    {
      id: 1,
      name: "Cristian Mercado",
      movie: "Falso Conejo en Sena/Quina",
      imageUrl: "/src/images/image.png"
    },
    {
      id: 2,
      name: "Reynaldo Pacheco",
      movie: "Experta en crisis",
      imageUrl: "/src/images/image copy.png"
    },
    {
      id: 3,
      name: "David Santalla",
      movie: "Mi socio",
      imageUrl: "/src/images/image copy 2.png"
    }
  ]

  return (
    <div className="principal-page">
      <div className="content-overlay">
        <h2>Actores Destacados</h2>
        <div className="actors-container">
          {actors.map(actor => (
            <ActorCard 
              key={actor.id}
              name={actor.name}
              movie={actor.movie}
              imageUrl={actor.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}