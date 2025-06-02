# 🎵 Projeto React - Buscador de Músicas

<h2 id="sumario">📑 Sumário</h2>

<ul>
  <li><a href="#sobre-o-projeto">💡 Sobre o Projeto</a></li>
  <li><a href="#funcionalidades-principais">🚀 Funcionalidades Principais</a></li>
  <li><a href="#tecnologias-utilizadas">🖥️ Tecnologias Utilizadas</a></li>
  <li><a href="#estrutura-do-projeto">🗂️ Estrutura do Projeto</a></li>
  <li><a href="#api-utilizada">🔌 API Utilizada</a></li>
  <li><a href="#como-rodar-localmente">🔧 Como rodar localmente</a></li>
  <li><a href="#autor">🧑‍💻 Autor</a></li>
  <li><a href="#licenca">📝 Licença</a></li>
</ul>

<h2 id="sobre-o-projeto">💡 Sobre o Projeto</h2>

<p>
  Este projeto consiste em uma aplicação front-end desenvolvida com <strong>React</strong>, consumindo a <strong>API iTunes Search</strong> para realizar buscas e exibir músicas de forma estilizada e organizada.
</p>

<p>
  O objetivo principal é proporcionar uma experiência intuitiva, moderna e eficiente na busca por músicas, artistas e álbuns.
</p>

<h2 id="funcionalidades-principais">🚀 Funcionalidades Principais</h2>

<ul>
  <li>🔎 Busca de músicas pelo nome, sem diferenciar letras maiúsculas, minúsculas ou acentos.</li>
  <li>⚠️ Exibição de mensagem de erro caso nenhuma música seja encontrada.</li>
  <li>🖼️ Exibição de imagem do álbum, artista, nome do álbum e duração da faixa.</li>
  <li>✅ Validação para impedir pesquisas com campo vazio.</li>
  <li>🎨 Interface estilizada com CSS, garantindo uma apresentação agradável.</li>
</ul>

<h2 id="tecnologias-utilizadas">🖥️ Tecnologias Utilizadas</h2>

<p>
  <img src="https://skillicons.dev/icons?i=react" alt="React" />
  <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" />
  <img src="https://skillicons.dev/icons?i=html" alt="HTML5" />
  <img src="https://skillicons.dev/icons?i=css" alt="CSS3" />
  <img src="https://skillicons.dev/icons?i=axios" alt="Axios" />
</p>

<p>
  Este projeto foi construído utilizando <strong>React</strong> para a estrutura do front-end, <strong>JavaScript (ES6+)</strong> para a lógica de programação, <strong>HTML5</strong> e <strong>CSS3</strong> para marcação e estilo. A biblioteca <strong>Axios</strong> é utilizada para as requisições HTTP à API.
</p>

<h2 id="estrutura-do-projeto">🗂️ Estrutura do Projeto</h2>

<pre>
📁 src
 ├── 📁 components            # Componentes reutilizáveis
 │    ├── SearchBar.js       # Barra de pesquisa
 │    └── MusicCard.js       # Cartão com detalhes da música
 ├── 📁 pages                # Páginas principais
 │    └── Home.js            # Página inicial com a busca
 ├── 📁 services             # Serviços de API
 │    └── api.js             # Configuração das requisições com Axios
 ├── App.js                  # Componente raiz da aplicação
 ├── index.js                # Ponto de entrada da aplicação
 └── App.css                 # Estilo global
</pre>

<h2 id="api-utilizada">🔌 API Utilizada</h2>

<p>
  A aplicação consome a <strong>iTunes Search API</strong>, que é gratuita e pública, permitindo buscas por músicas, artistas, álbuns, podcasts, filmes e muito mais.
</p>

<p>
  🔗 <a href="https://itunes.apple.com/search" target="_blank">https://itunes.apple.com/search</a>
</p>

<h2 id="como-rodar-localmente">🔧 Como rodar localmente</h2>

<h3>🛠️ Pré-requisitos</h3>

<ul>
  <li>Node.js</li>
  <li>NPM ou Yarn</li>
  <li>Editor de código (VSCode recomendado)</li>
</ul>

<h3>🚀 Passos para execução</h3>

<pre>
# Clone este repositório
git clone https://github.com/seu-usuario/projeto-musica-API-react.git

# Acesse a pasta do projeto
cd projeto-musica-API-react

# Instale as dependências
npm install

# Inicie o servidor
npm start
</pre>

<p>
  O projeto será executado em <strong>http://localhost:3000</strong>.
</p>

<h2 id="autor">🧑‍💻 Autor</h2>

<table>
  <tr><th>Nome</th><th>LinkedIn</th></tr>
  <tr>
    <td>Felipe Rottner Rodrigues</td>
    <td>
      <a href="https://www.linkedin.com/in/felipe-rottner-rodrigues-b13625319" target="_blank">
        Felipe no LinkedIn
      </a>
    </td>
  </tr>
</table>

<h2 id="licenca">📝 Licença</h2>

<p>
  Este projeto é de uso educacional.<br>
  Distribuído sob a licença <strong>MIT</strong>.<br>
  Veja o arquivo <a href="./LICENSE" target="_blank"><code>LICENSE</code></a> para mais informações.
</p>


