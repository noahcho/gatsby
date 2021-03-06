const path = require(`path`)

module.exports = (expressApp, { graphqlEndpoint }) => {
  const bundleUrlHandler = path.posix.join(graphqlEndpoint, `app.js`)
  expressApp.get(bundleUrlHandler, (req, res) => {
    res.set(`Cache-Control`, `public, max-age=31557600`)
    res.sendFile(path.join(__dirname, `app.js`))
  })

  expressApp.get(graphqlEndpoint, (req, res) => {
    res.sendFile(path.join(__dirname, `index.html`))
  })
}
