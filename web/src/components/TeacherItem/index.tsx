import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/63431479?s=460&u=3e7bb9d261a45c83c01f8badc6ba52f432a03c91&v=4" alt="Enéas Neto"/>
            <div>
              <strong>Enéas Neto</strong>
              <span>Lógica de Programação</span>
            </div>
          </header>

          <p>Estudante da área de programação.
            <br/>Objetivo de levar você um nível a cima no entendimento de lógica e algoritmos.<br/>
            
          </p>

          <footer>
            <p>Preço por hora
              <strong>R$20,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;