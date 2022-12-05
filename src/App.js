import "./App.css";
import Form from "./Form";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {


  return (
    <div className="App container body">
      <Weather />
      <Form />
      <Footer />
    </div>
  );
}
