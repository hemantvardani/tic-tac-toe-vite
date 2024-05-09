export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import logoUrl from './xo-logo4.jpg'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  // const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Challenge the Tic-Tac-Toe Master: Play Online for Free</title>

        <meta name="description" content="Experience the Thrill of Tic-Tac-Toe! Play the Classic Game of X's and O's for Free at AwesomeGame.com. Challenge Your Friends or Take on the Computer. Start Your Ultimate Tic-Tac-Toe Adventure Now!">
        <meta name="author" content="Neave Interactive">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://tictactoegame.in">

        <!-- Set the page as mobile-friendly -->
        <meta name="mobile-web-app-capable" content="yes">

        <meta property="og:locale" content="en_US">

        <meta name="keywords" content="Tic-Tac-Toe, Tic Tac Toe, X's and O's, online game, free game, multiplayer game">
        <meta http-equiv="content-language" content="en">



        <!-- Add Open Graph tags -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://tictactoegame.in">
        <meta property="og:title" content="Tic-Tac-Toe - Play Tic-Tac-Toe online for free">
        <meta property="og:description" content="Play the Tic-Tac-Toe game (Noughts and Crosses) for free online against Tic-Tac-Toe master or with your friends.">
         <!-- Add Twitter Card tags -->
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@tictactoe">
        <meta name="twitter:title" content="Tic-Tac-Toe - Play Tic-Tac-Toe online for free">
        <meta name="twitter:description" content="Play the Tic-Tac-Toe game (Noughts and Crosses) for free online against Tic-Tac-Toe master or with your friends.">
         
















        <style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
</style>

      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
