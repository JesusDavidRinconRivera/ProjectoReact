import Imagenes from './Imagenes';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Banner">
          <img src={Imagenes.logo} alt="" className="Hlogo" />
        </div>
      <div className="slider">
        <ul>
         <li><img  className = "PolloAsado" src={Imagenes.Slider_1  }  /></li>
         <li><img  className = "PolloParmesano " src={Imagenes.Slider_2 }  /></li>
         <li><img  className = "PolloKarague " src={Imagenes.Slider_3 }  /></li>
        </ul>
      </div>
      </header>
    </div>
  );
}
export default App;