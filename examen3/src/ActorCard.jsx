import './estilos.css'

export function ActorCard({ name, movie, imageUrl }) {
  return (
    <div className="actor-card">
      <div className="actor-image">
        {/* Reemplaza la URL del placeholder con tu imagen real */}
        <img src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{movie}</p>
    </div>
  )
}