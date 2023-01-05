import { Route, Routes } from "react-router";

import Header from "src/containers/header";
import HomePage from "src/containers/home-page";
import PeoplePage from "src/containers/people-page";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </div>
  );
};

export default App;
