import React from 'react'

interface Data{
    data: string;
    id: string;
    nome: string;
    pagamento: string;
    parcelas?: number;
    preco: number;
    status: string;
  }

type GetDataProps = {
    data: null | Array<Data>;
    setData: React.Dispatch<React.SetStateAction<null | Array<Data>>>;
    inicio: string;
    final: string;
}

const GetData = ({data, setData, inicio, final}: GetDataProps) => {
    const URL_API = 'https://data.origamid.dev/vendas/?inicio=' + inicio + '&final=' + final

    async function getVendas() {
        try{
            const response = await fetch(URL_API)
            const data = await response.json()
            console.log('DATA ==> ', data)           
            setData(data as Array<Data>) 
        }
    
        catch(error){   
            console.error('ERROR  ==> ', error)
        }
    }

  return (
    <div>
        {
            inicio && 
            final && 
            <button onClick={getVendas}>Calcular</button>
        }

        {
            data && (
                <div>
                    <h2>Dados</h2>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>
                                {item.nome} - {item.data} - {item.preco} - {item.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        
    </div>
  )
}

export default GetData