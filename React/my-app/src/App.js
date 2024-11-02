import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import  Todolist from "./Todolist"
import './App.css';


function App() {

  return (
    <div className="App">
      <Header title = "To Do List" />
      <Content />
      <Todolist />
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
