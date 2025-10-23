
import { Route, Routes } from "react-router-dom";

//pages 
import Calculator  from "./pages/calculator";


const routes =[
    {
path:"/",
element: <Calculator/>
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
