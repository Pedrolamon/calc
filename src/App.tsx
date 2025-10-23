import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./index";


function App(){
  return(
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}

export default App