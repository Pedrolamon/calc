import React, {useState, useEffect} from "react";

//funçoes 
import { sum } from "../functions/calc";
import { sub } from "../functions/calc";
import { div } from "../functions/calc";
import { mult } from "../functions/calc";


export default function calculator(){
    const number = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
    const symbol = [{lable:"+", fun: sum },{ lable:"-", fun:sub },{lable: "/", fun: div }, {lable:"*", fun: mult}];

    const [display , setDisplay] = useState("0");
    const [value1, setValue1] = useState();
    const [operator, setOperator] = useState();
    const [value2, setValue2] = useState(false);
    

   
    return(
            <div>
                <h1> canculadora</h1>
                <div className="border max-w-56 flex justify-center"><button>{display}</button></div>
                <div className="flex justify-center">
                <div>{number.map(num => 
                    <button  key={num}
                    className="p-4 border rounded hover:bg-blue-200">
                        {num}
                    </button>
                )}
                </div>
                <div>{symbol.map(({lable, fun}) => (
                <button key={lable}
                onClick={lable}
                 className="p-4 border rounded hover:bg-blue-200">{lable}
                 </button>))}</div>
               
                </div>
            </div>
    )
    
}
