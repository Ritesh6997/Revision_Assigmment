const express = require("express")
const needle = require('needle')
const url = require('url')
const rateLimit = require("express-rate-limit").default;
const apicache = require("apicache");
 const cors = require("cors");

require("dotenv").config();
 
const app = express()
 app.use(cors());
const PORT = process.env.PORT || 5000
const API_BASE_URL = process.env.API_BASE_URL;
const API_BASE_KEY = process.env.API_BASE_KEY;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
let cache = apicache.middleware;
// Rate limiting

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 10 Mins
  max: 10, // maximum amount of requests per 10 mins
});

app.use(limiter);
app.set("trust proxy", 1);

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/getweather",cache("1 minutes"), async(req, res) => {
    try {
    const params = new URLSearchParams({
      [API_BASE_KEY]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });
 
    const apiRes = await needle("get", `${API_BASE_URL}?${params}&units=metric`);
    const data = apiRes.body;
 console.log(data)
    // Log the request to the public API
    if (process.env.NODE_ENV !== "production") {
      console.log(`REQUEST1: ${API_BASE_URL}?${params}&units=metric`);
    }
 
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
    console.log("Server is running on port : ",PORT)
})