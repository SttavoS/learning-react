import React from 'react';
import ReactDOM from 'react-dom/client';
import Tweet from './components/Tweet';

import twitterLogo from './assets/logo-twitter.svg';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a href="#">Home</a>
          <a href="#">Explorar</a>
          <a href="#">Notificações</a>
          <a href="#">Mensagens</a>
          <a href="#">Itens Salvos</a>
          <a href="#">Listas</a>
          <a href="#">Perfil</a>
        </nav>
        <button className="new-tweet" type="button">
          Tweetar
        </button>
      </aside>
      <main className="content">content</main>
    </div>
  </React.StrictMode>,
);
