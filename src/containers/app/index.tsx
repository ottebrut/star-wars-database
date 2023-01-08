import { Route, Routes } from "react-router";

import ErrorMessage from "src/components/error-message";
import PersonPage from "src/containers/character-page";
import PeoplePage from "src/containers/characters-page";
import FavoritesPage from "src/containers/favorites-page";
import Header from "src/containers/header";
import HomePage from "src/containers/home-page";
import NotFoundPage from "src/containers/not-found-page";
import SearchPage from "src/containers/search-page";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/fail" element={<ErrorMessage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
