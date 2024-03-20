//import logo from './logo.svg';
import logo from './assets/icons/logo.png';
import charapters from './assets/charapters.jpg';
import location from './assets/location.png';
import epizodes from './assets/epizodes.png';
import './App.css';
import Header from "./Components/Header/Header";
import Category from "./Components/Category/Category";

function App() {
  return (
      <div className={"container"}>
          <Header />
        <main>
            <div className="category_container">
                <Category img={charapters} descriptionHeader="Персонажи" descriptionBody="Зайди и познакомься со всеми персонажами вселенной"/>
                <Category img={location} descriptionHeader="Локации" descriptionBody="Исследуй все локации. Давай же, не будь занудой!"/>
                <Category img={epizodes} descriptionHeader="Эпизоды" descriptionBody="Узнай чуть больше о карте приключений Рика и Морти"/>
            </div>
        </main>
      </div>
  );
}

export default App;
