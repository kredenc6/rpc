require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const proxyMiddleware = createProxyMiddleware({
  target: process.env.FIGMENT_URL,
  changeOrigin: true,
  headers: {
    Authorization: process.env.FIGMENT_TOKEN,
  },
});
const app = express();
app.use(cors({ origin: "https://app.relics.ai" }));
app.use("/", proxyMiddleware);
app.listen(process.env.PORT || 8080);
