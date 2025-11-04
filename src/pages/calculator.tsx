import  {useState} from "react";

//funçoes 
import { sum } from "../functions/calc";
import { sub } from "../functions/calc";
import { div } from "../functions/calc";
import { mult } from "../functions/calc";


export default function calculator(){
    const number = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
    const symbol = [{lable:"+", fun: sum },{ lable:"-", fun:sub },{lable: "/", fun: div }, {lable:"*", fun: mult}, {lable:"C", fun: null }, {lable:"=", fun: null}];

    const [result , setResult] = useState<number | null>(null);
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState<string[]>([]);
    const [numerosSelecionado, setNumerosSelecionado] = useState<number[]>([])

    const handleClear = () => {
        setDisplay("0");
        setNumerosSelecionado([]);
        setOperator([]);
        setResult(null);
    }


    const adicionarSimbolo = (sym:string) =>{
        setOperator(prevoperator => [...prevoperator, sym])
        setDisplay(prevDisplay => {
            if (prevDisplay === '0') {
                return String(sym);
            }
            return prevDisplay + String(sym); 
        });
    }

    const adcionarNumero = (num:number) =>{
        setNumerosSelecionado(prevNumero => [...prevNumero, num]);

        setDisplay(prevDisplay => {
            if (prevDisplay === '0') {
                return String(num);
            }
            return prevDisplay + String(num); 
        });
    }

    const calcular = () => {
        let resultadoAtual = numerosSelecionado[0]

        for (let i = 0; i < operator.length; i++) {
            const opSimbolo = operator[i];
            const proximoNumero = numerosSelecionado[i + 1];
    
            if (proximoNumero === undefined) break;
    
            const operadorObjeto = symbol.find(s => s.lable === opSimbolo);
            
            if (operadorObjeto && operadorObjeto.fun) {
                resultadoAtual = operadorObjeto.fun(resultadoAtual, proximoNumero);
            }
        }
        setResult(resultadoAtual);
        setDisplay(String(resultadoAtual));
        setNumerosSelecionado([resultadoAtual]); 
        setOperator([]);
    };
   
    return(
            <div className="">
                <h1> canculadora</h1>
               <div className="border  flex justify-center">
                <button className="flex justify-center">{display}</button> 
                </div>
                <div className="flex justify-center">
                <div>{number.map(num => 
                    <button  key={num}
                    onClick={() => adcionarNumero(num)}
                    className="p-4 border rounded hover:bg-blue-200">
                        {num}
                    </button>
                )}
                </div>
                <div>{symbol.map(({lable}) => (<button key={lable} 
                onClick={()=>{if(lable === "="){calcular();
                }else if(lable === "C")
                    {handleClear()
                }else{adicionarSimbolo(lable)}}}
                 className="p-4 border rounded hover:bg-blue-200">{lable}
                 </button>))}</div>
               
                </div>
            </div>
    )
    
}
