import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div className="confirmButton">
      <a href="/" className="myButton">
        Continuar Comprando
      </a>
      <a href="/dadospessoais" className="myButton">
        Ir para pagamento
      </a>
    </div>
  )
}

export default Button
