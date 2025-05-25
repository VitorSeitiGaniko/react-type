import React from 'react'
import useFectch from './useFectch'

interface Venda{
  data: string;
  id: string;
  nome: string;
  pagamento: string;
  parcelas?: number;
  preco: number;
  status: string;
}

const Response = () => {
  const {data, loading, error} = useFectch<Array<Venda>>('https://data.origamid.dev/vendas')

  console.log('DATA ==> ', data)
  console.log('LOADING ==> ', loading)
  console.log('ERROR ==> ', error)
  
  
  return (
    <div>response</div>
  )
}

export default Response