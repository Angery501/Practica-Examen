import { useState } from 'react'
import { Principal } from './Principal'
import { Peliculas } from './Peliculas'
import './estilos.css'

function App() {
  const [currentPage, setCurrentPage] = useState('principal')

  return (
    <div className="app">
      {/* BARRA DE TITULO */}
      <header className="title-bar">
        <h1>CINEMATECA BOLIVIANA</h1>
      </header>

      {/* BARRA DE MENU */}
      <nav className="menu-bar">
        <button 
          onClick={() => setCurrentPage('principal')}
          className={currentPage === 'principal' ? 'active' : ''}
        >
          Principal
        </button>
        <button 
          onClick={() => setCurrentPage('peliculas')}
          className={currentPage === 'peliculas' ? 'active' : ''}
        >
          Películas
        </button>
      </nav>

      {/* SECCIÓN DE CONTENIDO */}
      <main className="content-section">
        {currentPage === 'principal' ? <Principal /> : <Peliculas />}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-name">Aracely Naomi Prado Flores</div>
        <div className="footer-ad">INF122 - Programación Web II</div>
      </footer>
    </div>
  )
}

export default App