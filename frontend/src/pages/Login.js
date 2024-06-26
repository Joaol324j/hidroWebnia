import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/api';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const RegisterLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await login({ email, password })
      navigate('/')
      window.location.reload()
    } catch (err) {
        setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <Input 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          {error && <p>{error}</p>}
          
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Login'}
          </Button>
        </form>

        <RegisterLink onClick={() => navigate('/cadastro')}>
          Não tem uma conta? Registre-se aqui
        </RegisterLink>
        <RegisterLink onClick={() => navigate('/reset-password')}>
          Esqueceu a senha?
        </RegisterLink>
      </LoginBox>
    </Container>
  )
}

export default Login
