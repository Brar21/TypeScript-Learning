import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<BrowserRouter>
<App />
</BrowserRouter>
  
)
