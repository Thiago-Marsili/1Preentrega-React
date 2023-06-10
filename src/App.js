import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css"

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={"Peliculas"}/>
    </div>
  );
}

export default App;

