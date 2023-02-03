import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Accueil from "./components/Accueil";
import Produits from "./components/Produits";

function App() {
  return (
    <div className="App">
     <Route path = "/accueil">
    <Accueil/>
     </Route>
     <Route path = "/produits"> 
      <Produits/>
     </Route>
    </div>
  );
}

export default App;
