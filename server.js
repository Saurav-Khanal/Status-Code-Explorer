const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("app is running on localhost 3000");
});
app.use(express.static("public"));
app.get("/",(req,res)=>{
  res.redirect("/index.html");
})

const statusCodes = [
  {
    code: 200,
    name: "OK",
    category: "Success",
    explanation:
      "The request was successful. The server processed the request and returned the requested information."
  },
  {
    code: 201,
    name: "Created",
    category: "Success",
    explanation:
      "The request was successful, and the server created a new resource. This commonly happens after submitting a POST request."
  },
  {
    code: 202,
    name: "Accepted",
    category: "Success",
    explanation:
      "The server received the request and accepted it for processing, but the processing has not been completed yet."
  },
  {
    code: 204,
    name: "No Content",
    category: "Success",
    explanation:
      "The server successfully processed the request, but there is no additional content to send back. This is common after deleting a resource."
  },
  {
    code: 301,
    name: "Moved Permanently",
    category: "Redirection",
    explanation:
      "The requested resource has permanently moved to a new URL. The server provides the new location so clients can access it."
  },
  {
    code: 302,
    name: "Found",
    category: "Redirection",
    explanation:
      "The requested resource is temporarily available at a different URL. The client should use the provided location for this request."
  },
  {
    code: 304,
    name: "Not Modified",
    category: "Redirection",
    explanation:
      "The requested resource has not changed since the client's last cached version, so the server tells the client it can reuse that version."
  },
  {
    code: 400,
    name: "Bad Request",
    category: "Client Error",
    explanation:
      "The server cannot process the request because the client sent invalid, malformed, or incomplete information."
  },
  {
    code: 401,
    name: "Unauthorized",
    category: "Client Error",
    explanation:
      "The request requires valid authentication, but the client has not provided valid authentication credentials."
  },
  {
    code: 403,
    name: "Forbidden",
    category: "Client Error",
    explanation:
      "The server understood the request but refuses to allow access because the client does not have the required permission."
  },
  {
    code: 404,
    name: "Not Found",
    category: "Client Error",
    explanation:
      "The server cannot find the requested resource. This can happen when a URL is incorrect or the resource no longer exists."
  },
  {
    code: 405,
    name: "Method Not Allowed",
    category: "Client Error",
    explanation:
      "The server recognizes the requested resource, but the HTTP method used is not supported for that resource."
  },
  {
    code: 408,
    name: "Request Timeout",
    category: "Client Error",
    explanation:
      "The server did not receive the complete request within the time it was willing to wait, so it closed the connection."
  },
  {
    code: 409,
    name: "Conflict",
    category: "Client Error",
    explanation:
      "The request conflicts with the current state of the resource. For example, creating a record that violates a uniqueness rule."
  },
  {
    code: 422,
    name: "Unprocessable Content",
    category: "Client Error",
    explanation:
      "The server understands the request format, but it cannot process the instructions because the submitted data contains semantic errors."
  },
  {
    code: 429,
    name: "Too Many Requests",
    category: "Client Error",
    explanation:
      "The client has sent too many requests within a certain period. The server limits requests to prevent excessive usage."
  },
  {
    code: 500,
    name: "Internal Server Error",
    category: "Server Error",
    explanation:
      "Something unexpected went wrong inside the server while processing the request, preventing it from completing successfully."
  },
  {
    code: 501,
    name: "Not Implemented",
    category: "Server Error",
    explanation:
      "The server does not support the functionality required to fulfill the request, usually because the requested method or feature is not implemented."
  },
  {
    code: 502,
    name: "Bad Gateway",
    category: "Server Error",
    explanation:
      "A server acting as a gateway or proxy received an invalid response from another server it needed to contact."
  },
  {
    code: 503,
    name: "Service Unavailable",
    category: "Server Error",
    explanation:
      "The server is temporarily unable to handle requests, often because of maintenance, overload, or temporary service problems."
  }
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
