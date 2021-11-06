import React, { createContext, useContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          height: "95%",
          top: 18,
          width: 380,
          left: 71,
          borderRadius: 20,
          boxShadow: "none",
          borderTopRightRadius: 0,
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: "unset",
        },
      },
    },
  });
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
