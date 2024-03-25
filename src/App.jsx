//import logo from './logo.svg';
import logo from './assets/icons/logo.png';
import './App.css';
import Header from "./Components/Header/Header";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
import catigories from "./data/local/catigories";

function App() {
  return (
      <div className={"container"}>
          <Header />
        <main>
            <CategoryContainer dataArr={catigories}/>
        </main>
      </div>
  );
}

export default App;
