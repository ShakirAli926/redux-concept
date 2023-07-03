import './App.css'
import Home from "./Component/Home.jsx";
import {useSelector} from "react-redux";

function App() {
    const {c}  = useSelector(state => state.custom)

  return (
    <>
      <div>
          <h2>{c}</h2>
          <Home />
      </div>
    </>
  )
}

export default App
