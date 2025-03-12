Dans le config.json après le np init...


créer branche gh-pages
ONCE "gid add dist -f && git commit -m 'Deployment commit'"
on deployment merge then npm run deploy


"scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js",
    "deploy": "git subtree push --prefix dist origin gh-pages",
}