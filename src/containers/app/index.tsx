import { Route, Routes } from "react-router";

import ErrorMessage from "src/components/error-message";
import CharacterPage from "src/containers/character-page";
import CharactersPage from "src/containers/characters-page";
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
        <Route path="/people" element={<CharactersPage />} />
        <Route path="/people/:id" element={<CharacterPage />} />
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
