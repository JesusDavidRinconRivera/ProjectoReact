import Imagenes from './Imagenes';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Banner">
          <img src={Imagenes.logo} alt="" className="Hlogo" />
          <div className="StreetFood">
          <div className="Titulo">
            <h1 className='Street'>Street</h1>
            <h1 className="food">Food</h1>
          </div>
          <div className="Titulo2">
            <h1 className='Street2'>Street</h1>
            <h1 className="food2">Food</h1>
          </div>
          </div>
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