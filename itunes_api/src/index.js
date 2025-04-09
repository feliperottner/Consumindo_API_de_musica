// Importa o ReactDOM para renderizar o app na tela
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal App
import App from './App';

// Renderiza o App dentro da div com id 'root' no index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
