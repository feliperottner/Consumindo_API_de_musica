// Importa os hooks do React
import React, { useState } from 'react';

// Importa o CSS
import '../styles/App.css';

// Importa a instância do axios configurada
import api from '../services/Api';

// Importa o componente que exibe as informações da música
import MusicCard from './MusicCard';

// Componente responsável por exibir o campo de busca e os resultados
function SearchBar() {
  // Estado para armazenar o termo digitado na busca
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para armazenar os resultados das músicas
  const [musics, setMusics] = useState([]);

  // Estado para mensagem de erro ou nenhum resultado
  const [errorMessage, setErrorMessage] = useState('');

  // Função chamada ao clicar em "Buscar"
  const handleSearch = async () => {
    // Verifica se o campo está vazio
    if (searchTerm.trim() === '') {
      setErrorMessage('Digite algo para buscar.');
      setMusics([]); // Limpa resultados
      return;
    }

    try {
      // Remove acentos e converte para minúsculas
      const normalizedSearch = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

      // Faz a requisição para a API com o termo de busca normalizado
      const response = await api.get(`?term=${normalizedSearch}&media=music`);

      const results = response.data.results;

      // Verifica se encontrou algo
      if (results.length === 0) {
        setErrorMessage('Nenhuma música encontrada.');
        setMusics([]);
      } else {
        setErrorMessage('');
        setMusics(results);
      }
    } catch (error) {
      setErrorMessage('Erro ao buscar músicas.');
      console.error('Erro ao buscar músicas:', error);
    }
  };

  return (
    <div className="search-container">
      <h1 className="titulo">Buscador de Músicas - iTunes API</h1>

      <div className="input-group">

        <input
          type="text"
          placeholder="Digite o nome da música"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Buscar
        </button>
      </div>

      {/* Exibe mensagens de erro ou nenhuma música */}
      {errorMessage && <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>}

      {/* Lista de resultados exibida */}
      <div className="results lista">
        {musics.map((music) => (
          <MusicCard key={music.trackId} music={music} />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
