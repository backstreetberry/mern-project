import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!, Nisarg XD");
});

export default app;
