import Newsfeed from "./Components/Newsfeed";
import CurrencyConverter from "./Components/CurrencyConverter";


const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
      <CurrencyConverter/>
      <Newsfeed/>
      </div>
      
    </div>
  )
}

export default App;
