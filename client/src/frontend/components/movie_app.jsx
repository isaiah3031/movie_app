import React from 'react';
import ReactDom from 'react-dom';
import configureStore from "../../../frontend/store/store";
import Root from "../../../frontend/components/root";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // // TESTING END

  const root = document.getElementById("root");
  ReactDom.render(<Root />, root);
});