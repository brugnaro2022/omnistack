import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiImage } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  const handleRegister = async e => {
    e.preventDefault()
    const data = { name, email, phone, city, uf }
    try {
      const response = await api.post('ongs', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

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
        <form onSubmit={handleRegister}>
          <input
            placeholder='Nome da ONG'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder='Número de telefone'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <div className='input-group'>
            <input
              placeholder='Cidade'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
