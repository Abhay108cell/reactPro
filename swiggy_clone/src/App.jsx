import "./index.css"; // Or the path to your CSS file
import Header from "./components/Header";
import Category from "./components/Category";
import TopRes from "./components/TopRes";
import OnlineDelivery from "./components/OnlineDelivery";

function App() {
  return (
    <>
      <Header />
      <Category/>
      <TopRes/>
      <OnlineDelivery/>
    </>
  );
}

export default App;
