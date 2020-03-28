import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiImage } from 'react-icons/fi'

import './styles.css'

export default () => {
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <FiImage size={100} color='#E02041' />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma.</p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Logon
          </Link>
        </section>
        <form>
          <input placeholder='Nome da ONG' />
          <input type='email' placeholder='E-mail' />
          <input placeholder='Número de telefone' />
          <div className='input-group'>
            <input placeholder='Cidade' />
            <input placeholder='UF' style={{ width: 80 }} />
          </div>
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
