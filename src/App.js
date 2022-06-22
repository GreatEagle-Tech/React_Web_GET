import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Honours from "./components/pages/Honours";
import Seminars from "./components/pages/Seminars";

function App() {
  return (
    <div className={classes.body}>
      <Header />
      <main className={classes.main} id="idMain">
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/honours" element={<Honours />}></Route>
          <Route path="/seminars" element={<Seminars />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
