import "./App.scss";
import CartComponent from "./components/container/Cart/Cart";
import PaymentComponent from "./components/container/Payment/Payment";

function App() {
  return (
    <div className="App">
      <CartComponent></CartComponent>
      <PaymentComponent></PaymentComponent>
    </div>
  );
}

export default App;
