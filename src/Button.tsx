import React from 'react'

// interface ButtonProps {
//   tamanho?: string;
//   children?: React.ReactNode; // Permite passar filhos para o componente Button
//   onClick?: () => void; // Função de clique opcional
// }

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string;
}

function Button({tamanho, children, ...props}: ButtonProps) {
  return (
    <button 
        style={{fontSize: tamanho}}
        {...props} // Espalha as props do botão, como onClick, className, id, etc.
    >
        {children ? children : 'click'}
    </button>
  )
}

export default Button