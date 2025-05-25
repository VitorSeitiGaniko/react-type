import React from 'react';
import Button from './Button';
import ButtonExercice from './ButtonExercice';
import Input from './Input';

function App() {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>Total: {count}</p>
      <Button 
        onClick={increment} 
        tamanho='20px' 
        className='btn' 
        id='button'
      />
      <Button>TEXTO FILHO</Button>

      <Input 
        label='email'
        styleHeight='50px'
        type='email'
        placeholder='Digite seu email'
      />


      {/* -------------------------------------------------------------------------------------- */}
      <div>
        <p>Total: {total}</p>
        <ButtonExercice total={total} setTotal={setTotal} />
      </div>
    </div>
  )
}

export default App
