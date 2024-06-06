import HeaderComponent from './components/HeaderComponent';
import './App.css';
import BodyComponent from './components/BodyComponent';
import "../src/components/css/html.css"
import AboutComponent from "./components/AboutComponent"
import ServiceComponent from './components/ServiceComponent';
import EmployersComponent from './components/EmployersComponent';
import HITComponent from './components/HITComponent';
import BikesComponent from './components/BikesComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <BodyComponent/>
        <AboutComponent/>
        <ServiceComponent/>
        <EmployersComponent/>
        <HITComponent/>
        <BikesComponent/>
    </div>
  );
}

export default App;
