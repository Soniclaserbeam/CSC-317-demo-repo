import express from 'express';

const app = express();

app.get("/cars", (req, resp) => {
    resp.send("Hello World");
});

app.post("/cars", (req, resp) =>{
    resp.send("this is a POST handler");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});