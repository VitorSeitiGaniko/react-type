import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    label: string;
    id: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({label,  id, setInicio, ...props}: InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input onChange={({target}) => setInicio(target.value)} type="text" id={id} {...props} />
    </div>
  )
}

export default Input