/*--------------------- 4.3.1 Asynchronous programming ---------------------*/

/* 
This section delves into asynchronous programming, specifically exploring the use of the XMLHttpRequest object and the fetch method. 
To effectively demonstrate these, we've set up a service ready to respond to client requests.

Below, you'll find a sample server implemented with node.js.
*/

var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
app.get("/", (req, res, next) => {
  res.send(' \
   \
   \
 \
Sample Site \
   \
   \
   \
  ');
});
app.get("/json", async (req, res, next) => {
  const time = Math.floor(Math.random() * 1000) + 1000;
  let square = req.query.value || 0;
  square *= square;
  await sleep(time);
  res.json({
'time': time,
'square': square
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/*
This server, accessible on a single port, offers:

An empty HTML page;
A JSON-formatted response. This takes a numeric "value" parameter from the request, squares it, and responds with the result. 
The response also contains a delay time, randomly set between 1000 to 2000 ms.
For the sake of our course examples, we're assuming the server runs locally, and we're avoiding cross-origin complexities by staying within the same domain and port.

To initiate, launch http://localhost:3000 in your browser. 
From here, you can run the XMLHttpRequest and fetch examples via the console, targeting http://localhost:3000/json.

Be aware that the provided setup might require adjustments depending on the intended usage or environment.
*/