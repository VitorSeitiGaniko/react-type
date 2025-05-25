import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import ResponsePractice from './exercicioHookFetchPractice/responsePractice';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App />
    <AppDate />
    <Video />
    <Response /> */}
    <ResponsePractice />
  </StrictMode>
);
