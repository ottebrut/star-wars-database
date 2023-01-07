import React from "react";

import ThemeSelector from "src/containers/home-page/theme-selector";

const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="header__text">Home page</h1>
      <ThemeSelector />
    </>
  );
};

export default HomePage;
