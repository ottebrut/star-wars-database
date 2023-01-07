import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { REPO_NAME } from "src/constants/repo-name";
import App from "src/containers/app";
import ThemeProvider from "src/context/theme/theme-provider";
import store from "src/store/store";

import "src/assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={REPO_NAME}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
