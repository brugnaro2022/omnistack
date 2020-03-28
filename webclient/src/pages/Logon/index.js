import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiUser, FiImage } from 'react-icons/fi'
import './styles.css'

export default () => (
  <div className='logon-container'>
    <section className='form'>
      <FiUser size={50} color='#E02041' />
      <form>
        <h1>Logon</h1>
        <input placeholder='Sua ID' />
        <button className='button' type='submit'>
          Entrar
        </button>
        <Link className='back-link' to='/register'>
          <FiLogIn size={16} color='#E02041' />
          Não tenho cadastro
        </Link>
      </form>
    </section>
    <FiImage size={100} color='#E02041' />
  </div>
)
