import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div className="confirmButton">
      <a href="/" class="myButton">
        Continuar Comprando
      </a>
      <a href="/dadospessoais" class="myButton">
        Ir para pagamento
      </a>
    </div>
  )
}

export default Button
