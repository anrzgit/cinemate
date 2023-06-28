import './App.css';
import { Header,Footer } from './components';
import { AllRoutes } from './routes/allRoutes';


function App() {
  return (
    <div className='App' >
      <Header/>
        <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
