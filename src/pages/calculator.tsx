
import { useState, useEffect } from 'react';

const buttons = [
  ['CE', 'C', '÷', '×'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['.', '0', null, '='] 
];

interface ButtonProps {
    value: string;
    className: string;
    onClick: (value: string) => void;
}


const STORAGE_KEY = 'calcHistory';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0'); 
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (exp:string, res:string) => {
    setHistory(prevHistory => {
      const newEntry = `${exp} = ${res}`;
      return [newEntry, ...prevHistory.slice(0, 4)];
    });
  };

  const handleButtonClick = (value:string) => {
    if (value === 'C') {
      setExpression('');
      setResult('0');
      return;
    }

    if (value === 'CE') {
      setExpression(prev => prev.slice(0, -1));
      return;
    }

    if (value === '=') {
      try {
        if (!expression) return;

        let calculationExpression = expression
          .replace(/×/g, '*')
          .replace(/÷/g, '/');

        const finalResult = String(eval(calculationExpression));
        
        addToHistory(expression, finalResult);
        setResult(finalResult);
        setExpression(finalResult); 
        
      } catch (error) {
        setResult('Error');
        setExpression('');
      }
      return;
    }

    setExpression(prev => prev + value);
  };

  const Button = ({ value, className, onClick }: ButtonProps) => (
    <button
      className={`
        h-14 w-14 rounded-lg text-lg text-white font-semibold 
        bg-button-dark shadow-xl active:shadow-inner active:opacity-90 
        transition-all duration-100 ${className}
      `}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );

  return (
    <div className="flex justify-center items-start p-10 space-x-8 min-h-screen bg-bg-light-purple">
      
      <div className="p-4 bg-[#2D2A37] rounded-xl shadow-2xl">
        
        <div className="flex flex-col items-end p-2 mb-4 h-24 text-white">
          <div className="text-sm opacity-70 mb-1 h-4">{expression}</div>
          <div className="text-4xl font-light h-10">{result}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((row, rowIndex) => (
            row.map((value, colIndex) => {
              if (value === null) { 
                return <div key={`${rowIndex}-${colIndex}`} className="h-14 w-14"></div>;
              }

              const isOperator = ['÷', '×', '-', '+', '='].includes(value);
              const isClear = ['CE', 'C'].includes(value);
              const isEquals = value === '=';

              const purpleClass = isEquals || (rowIndex === 3 && colIndex === 3) || (rowIndex === 4 && colIndex === 3)
                ? 'bg-button-purple' : '';

              const equalsSize = isEquals && rowIndex === 4 ? 'col-span-1' : '';

              return (
                <Button 
                  key={value + rowIndex} 
                  value={value} 
                  className={`${purpleClass} ${isOperator ? 'text-xl' : ''} ${isClear ? 'opacity-70' : ''} ${equalsSize}`}
                  onClick={handleButtonClick}
                />
              );
            })
          ))}
        </div>
      </div>

      <div className="p-6 w-80 bg-[#2D2A37] rounded-xl shadow-2xl">
        <h3 className="text-white text-lg mb-4 font-semibold">Histórico de Operações</h3>
        <div className="space-y-2">
          {history.length > 0 ? (
            history.map((item, index) => (
              <p key={index} className="text-white text-sm opacity-80">{item}</p>
            ))
          ) : (
            <p className="text-white text-sm opacity-50">Nenhuma operação recente.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;