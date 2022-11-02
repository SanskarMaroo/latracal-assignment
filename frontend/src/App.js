import './App.css';
import DisplayCars from './components/DisplayCars';
import Garage from './components/Garage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break;
    case "/garage":
      Component = Garage
      break;
    case "/check-out":
      Component = DisplayCars
      break;
  }
  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default App;
