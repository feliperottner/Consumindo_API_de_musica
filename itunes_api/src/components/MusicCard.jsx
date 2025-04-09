// Importa o React
import React from 'react';

// Importa o CSS
import '../styles/App.css';

// Componente que exibe os dados de cada música
function MusicCard({ music }) {
  return (
    <div className="card">
      {/* Aqui está a Imagem do álbum */}
      <img
        src={music.artworkUrl100}
        alt={music.collectionName}
        className="imagem"
      />

      {/* Aqui está as Informações sobre a  música */}
      <div className="infoContainer">
        <h2 className="tituloMusica">{music.trackName}</h2>
        <p className="artista"><strong>Artista:</strong> {music.artistName}</p>
        <p className="album"><strong>Álbum:</strong> {music.collectionName}</p>
        <p className="duracao">
          <strong>Duração:</strong> {Math.floor(music.trackTimeMillis / 60000)}:
          {String(Math.floor((music.trackTimeMillis % 60000) / 1000)).padStart(2, '0')} min
        </p>
      </div>
    </div>
  );
}

export default MusicCard;
