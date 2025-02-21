import AxiosAPI from "./AxiosAPI";
import AsyncAwaitAPI from "./AsyncAwaitAPI"; 

function App() {
  return (
    <div>
      <h1>AXIOS method</h1>
      <AxiosAPI /> 
      <br /> 
      <h1>AsyncAwait method</h1>
      <AsyncAwaitAPI /> 
    </div>
  );
}

export default App;
