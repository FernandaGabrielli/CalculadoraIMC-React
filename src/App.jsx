
import React, { useState } from 'react';
import './components/imcCalculator.css';

const IMCCalculator = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    // Classificação de acordo com a tabela de IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div className="imc-calculator">
      <h2>Calculadora de IMC</h2>
      <label>
        Altura (cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <label>
        Peso (kg):
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <button onClick={calcularIMC}>Calcular</button>

      {imc !== null && (
        <div className="resultado">
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
