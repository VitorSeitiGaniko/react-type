import React from 'react'
import Input from './Input'
import GetData from './GetData'

interface Data{
  data: string;
  id: string;
  nome: string;
  pagamento: string;
  parcelas?: number;
  preco: number;
  status: string;
}

const AppDate = () => {
  const [inicio, setInicio] = React.useState('')
  const [final, setFinal] = React.useState('')
  const [data, setData] = React.useState<null | Array<Data>>(null)

  return (
    <div style={{marginTop: '50px'}}>
      <h1>Exercicio Date</h1>
      <p>Data Inicial: {inicio}</p>
      <p>Data Final: {final}</p>
      <Input 
        label='Data Inicial'
        id='data-inicial'
        name='data-inicial'
        type='date'
        value={inicio}
        setInicio={setInicio}
      />
      <Input 
        label='Data Final'
        id='data-final'
        name='data-final'
        type='date'
        value={final}
        setInicio={setFinal}
      />

      <GetData 
        data={data}
        setData={setData}
        inicio={inicio}
        final={final}
      />
    </div>
  )
}

export default AppDate