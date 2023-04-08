const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
      <p>This is the home page</p>
      <a href="/">Home</a> <br>
      <a href="/about">About page</a>
      <a href="/456">Invalid link</a>
    `);
  } else if (req.url === "/about") {
    res.end(
      `<p>Here is our short history</p>
      <a href="/">Home</a> <br>
      <a href="/">Home</a> <br>
      <a href="/about">About page</a>
      <a href="/25">Invalid link</a>`
    );
  } else {
    res.end(`
      <h1>Oops! </h1>
      <p>We can't seem to find the  
      page you are looking for </p>   
      <a href="/">Home</a> <br>
      <a href="/">Home</a> <br>
      <a href="/about">About page</a>
      <a href="/34">Invalid link</a> 
    `);
  }
});

server.listen(5000);
