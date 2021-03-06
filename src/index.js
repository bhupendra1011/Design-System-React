import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components/Modal";

import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px",
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px",
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>

      <button
        style={{
          margin: "0 16px 24px",
          padding: "8px",
          background: "none",
          cursor: "pointer",
          border: "2px solid #000",
          marginTop: "60px",
        }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>

      <br />

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrimaryButton modifiers="small">Hello World !</PrimaryButton>
        <PrimaryButton modifiers={["success", "small"]}> Sucess</PrimaryButton>
        <PrimaryButton modifiers={["error", "small"]}> Error!</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning"]}>
          Warning
        </SecondaryButton>
        <TertiaryButton>Hello World !</TertiaryButton>
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
