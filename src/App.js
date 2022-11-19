import { useEffect, useState } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  useEffect(() => {
    document.title = "Burger Builder";
  }, []);

  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme] = useState(isBrowserDefaultDark() ? "dark" : "light");

  return (
    <div className={`App theme-${theme}`}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
