import { useFetchPractice } from './useFetchPractice';

interface Venda {
  data: string;
  id: string;
  nome: string;
  pagamento: string;
  parcelas?: number;
  preco: number;
  status: string;
}

const ResponsePractice = () => {
  const data = useFetchPractice<Venda[]>('https://data.origamid.dev/vendas');

  console.log('DATA ==> ', data.data);
  console.log('LOADING ==> ', data.loading);
  console.log('ERROR ==> ', data.error);

  return <div>responsePractice</div>;
};

export default ResponsePractice;
