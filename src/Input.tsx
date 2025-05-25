import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    label: string;
    styleHeight?: string;
}

function Input({label, styleHeight, ...props}: InputProps) {
  return (
    <div style={{marginTop: styleHeight}}>
        <label htmlFor={label}>{label}</label>
        <input
            id={label}
            name={label}
            {...props} // Espalha as props do input, type, placeholder, className, id, etc.
        />
    </div>
  )
}

export default Input