const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("app is running on localhost 3000");
});
app.use(express.static("public"));

const statusCodes = [
  { code: 200, message: "OK" },
  { code: 201, message: "Created" },
  { code: 202, message: "Accepted" },
  { code: 204, message: "No Content" },

  { code: 301, message: "Moved Permanently" },
  { code: 302, message: "Found" },
  { code: 304, message: "Not Modified" },

  { code: 400, message: "Bad Request" },
  { code: 401, message: "Unauthorized" },
  { code: 403, message: "Forbidden" },
  { code: 404, message: "Not Found" },
  { code: 405, message: "Method Not Allowed" },
  { code: 408, message: "Request Timeout" },
  { code: 409, message: "Conflict" },
  { code: 422, message: "Unprocessable Content" },
  { code: 429, message: "Too Many Requests" },

  { code: 500, message: "Internal Server Error" },
  { code: 502, message: "Bad Gateway" },
  { code: 503, message: "Service Unavailable" },
  { code: 504, message: "Gateway Timeout" },
];

app.get("/status/:code", (req, res) => {
  const requestedCode = Number(req.params.code);
  const result = statusCodes.find((data) => data.code === requestedCode);
    if(result){
        res.status(200).json(result);
    }else{
        res.status(404).json({
            message:"Code Not Found"
        })
    }
});
