import './App.css';
import router from './helpers/router';
import  { RouterProvider } from "react-router-dom";
import Container from "./Components/UI/Container/Container";
import Header from "./Components/Header/Header";

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
