import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React from "react";
import PropTypes from "prop-types";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const PageShell$1 = "";
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
({
  className: PropTypes.string,
  href: PropTypes.string.isRequired
});
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
const logoUrl = "/assets/static/xo-logo4.20349ed4.webp";
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Challenge the Tic-Tac-Toe Master: Play Online for Free</title>

        <meta name="description" content="Dare not to Challenge Tic-Tac-Toe Master!! Play the Tic-Tac-Toe game (Noughts and Crosses) for free online against Tic-Tac-Toe master or with your friends.">
        <meta name="author" content="Tic-Tac-Toe-Gamer">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://tictactoegame.in">

        <!-- Set the page as mobile-friendly -->
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-title" content="Tic-Tac-Toe Battle">
        <meta name="application-name" content="Tic-Tac-Toe Battle">


        
        <meta name="msapplication-tooltip" content="Tic-Tac-Toe Battle">
        <meta name="msapplication-starturl" content="https://tictactoegame.in">
        <meta name="msapplication-TileImage" content="${logoUrl}" >
        <meta name="msapplication-TileColor" content="#000">
        <meta name="msapplication-navbutton-color" content="#000">
        <meta name="theme-color" content="#000">
        <meta name="darkreader-lock" content="yes">



        <meta property="og:locale" content="en_US">

        <meta name="keywords" content="Tic-Tac-Toe, Tic Tac Toe, X's and O's, online game, Noughts and Crosses, multiplayer game">
        <meta http-equiv="content-language" content="en">



        <!-- Add Open Graph tags -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://tictactoegame.in">
        <meta property="og:site_name" content="Tic-Tac-Toe">

        <meta property="og:title" content="Challenge the Tic-Tac-Toe Master: Play Online for Free">
        <meta property="og:description" content="Experience the Thrill of Tic-Tac-Toe! Play the Classic Game of X's and O's for Free at tictactoegame.in. Challenge Your Friends or Take on the Computer. Start Your Ultimate Tic-Tac-Toe Adventure Now!">
        <meta property="og:image" content="${logoUrl}" >

         <!-- Add Twitter Card tags -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@tictactoe">
        <meta name="twitter:title" content="Challenge the Tic-Tac-Toe Master: Play Online for Free">
        <meta name="twitter:description" content="Play the Tic-Tac-Toe game (Noughts and Crosses) for free online against Tic-Tac-Toe master or with your friends.">
        <meta name="twitter:image" content="${logoUrl}">






        <link rel="shortcut icon" href="${logoUrl}">
        <link rel="icon" sizes="16x16" href="${logoUrl}">
        <link rel="icon" sizes="32x32" href="${logoUrl}">
        <link rel="icon" sizes="100x100" href="${logoUrl}">
        <link rel="icon" sizes="200x200" href="${logoUrl}">
        <link rel="icon" sizes="800x800" href="${logoUrl}">
        <link rel="image_src" href="${logoUrl}">
        <link rel="apple-touch-icon-precomposed" href="${logoUrl}">














        <style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
</style>

      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
