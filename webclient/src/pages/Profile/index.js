import React from 'react'
import { Link } from 'react-router-dom'
import { FiImage, FiPower } from 'react-icons/fi'
import './styles.css'

export default () => (
  <div className='profile-container'>
    <header>
      <FiImage size={50} color='#E02041' />
      <span>Welcome</span>
      <Link className='button' to='/incidents/new'>
        Cadastrar novo caso
      </Link>
      <button type='button'>
        <FiPower size={18} color='#E02041' />
      </button>
    </header>
    <h1>Casos Cadastrados</h1>
    <ul>
        <li>
            
        </li>
    </ul>
  </div>
)
