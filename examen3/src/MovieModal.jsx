import './estilos.css'

export function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>{movie.title}</h3>
        <p>{movie.summary}</p>
      </div>
    </div>
  )
}