
import { Route, Routes } from "react-router-dom";

//pages 
import Calculator  from "./pages/calculator";
import Revisão from "./pages/js";
import Funções from "./pages/funções";


const routes =[
    {
path:"/",
element: <Calculator/>
    },
    {
path:"/r",
element: <Revisão/>
    },
       {
path:"/f",
element: <Funções/>
    }
] as const

export function AppRoutes(){
    return(
        <Routes>
            {routes.map(({path,element}) =>(
                <Route 
                key={path}
                path={path}
                element={element}
                />
            ))}
        </Routes>
    )
}
