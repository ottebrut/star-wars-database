import { Route, Routes } from "react-router";

import Header from "src/containers/header";
import HomePage from "src/containers/home-page";
import NotFoundPage from "src/containers/not-found-page";
import PeoplePage from "src/containers/people-page";
import PersonPage from "src/containers/person-page";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
