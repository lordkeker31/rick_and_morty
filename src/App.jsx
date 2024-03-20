//import logo from './logo.svg';
import logo from './assets/icons/logo.png';
import charapters from './assets/charapters.jpg';
import location from './assets/location.png';
import epizodes from './assets/epizodes.png';
import './App.css';
import Header from "./Components/Header/Header";

function App() {
  return (
      <div className={"container"}>
          <Header />
        <main>
          <div className="category_container">
            <div className="category">
              <div className="category__image_container">
               <img src={charapters} alt=""/>
              </div>
            <div className="category__info_container">
                <h3 className="categiry__info_header">Персонажи</h3>
               <p className="category__info_description">Зайди и познакомься со всеми персонажами вселенной
               </p>
             </div>
            </div>
            <div className="category">
              <div className="category__image_container">
                <img src={location} alt=""/>
             </div>
              <div className="category__info_container">
               <h3 className="categiry__info_header">Локации</h3>
               <p className="category__info_description">Исследуй все локации. Давай же, не будь занудой!</p>
             </div>
            </div>
           <div className="category">
             <div className="category__image_container">
               <img src={epizodes} alt=""/>
             </div>
              <div className="category__info_container">
                <h3 className="categiry__info_header">Эпизоды</h3>
                <p className="category__info_description">Узнай чуть больше о карте приключений Рика и Морти</p>
             </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;
