import "./App.css";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App container body">
      <Form defaultLocation="sydney" />
      <Footer />
    </div>
  );
}
