import express from "express";
import { siteData } from "./src/models.js";

import path from "path";

const __dirname = path.resolve(path.dirname(""));
const app = express();
const port = process.env.PORT || 3008;

app.use(express.static("public"));
// damit sagen wir dass die viws in public views pages sind

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
// hier zeigen wir die data wir renderen die data
//send in model data to the view as we did before

app.get("/", (req, res) => {
    siteData.currentPage ='welcome';
res.render("pages/index", siteData);
});
app.get("/nouns", (req, res) => {
      siteData.currentPage = "nouns";
res.render("pages/nouns", siteData);
});
app.get("/books", (req, res) => {
      siteData.currentPage = "books";
res.render("pages/books", siteData);
});
app.get("/jobs", (req, res) => {
      siteData.currentPage = "jobs";
res.render("pages/jobs", siteData);
});
app.get("/translations", (req, res) => {
      siteData.currentPage = "translations";
res.render("pages/translations", siteData);
});
app.get("/landscapePhotos", (req, res) => {
      siteData.currentPage = "landscapePhotos";
    res.render("pages/landscapePhotos", siteData);
});
// console.log(siteData)

//das ist alte version 
// app.get('/', (req, res) => {
//     res.send(siteView(siteData));
// });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
