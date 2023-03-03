import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Routes from './routes/index'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
