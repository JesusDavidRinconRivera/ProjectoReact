
//import hamburgeusa from "./Imagenes/Hamburguesa.png";
import Imagenes from './Imagenes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Banner">
        <img  className = "HLogo" src={Imagenes.logo}  alt=""/>
       
      <div className="Titulo">
        <h1>Street</h1>
        <h1>Food</h1>
       </div>
      </div>
      <div className="slider">
        <ul>
          <li><img  className = "SliderPollo" src={Imagenes.Slider_1}  /></li>
          <li><img  className = "SliderPollo" src={Imagenes.Slider_2}/></li>
          <li><img  className = "SliderPollo" src={Imagenes.Slider_3} /></li>
        </ul>
        <mg></mg>
      </div>
       
      </header>
    </div>
  );
}

export default App;
