import HeaderComponent from './components/HeaderComponent';
import './App.css';
import BodyComponent from './components/BodyComponent';
import "../src/components/css/html.css"
import AboutComponent from "./components/AboutComponent"
import ServiceComponent from './components/ServiceComponent';
import ServiceComponent2 from './components/ServiceComponent2';
import ServiceComponent3 from './components/ServiceComponent3';


function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <BodyComponent/>
        <AboutComponent/>
        <ServiceComponent/>
        <ServiceComponent2/>
        <ServiceComponent3/>
    </div>
  );
}

export default App;
