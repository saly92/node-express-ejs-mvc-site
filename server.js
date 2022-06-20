import express from "express";
import { siteData } from "./src/models.js";
import { siteView } from "./src/views.js";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
const app = express();
const port = process.env.PORT || 3007;

app.use(express.static("public"));
// damit sagen wir dass die viws in public views pages sind

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./public/views"));
// hier zeigen wir die data wir renderen die data
//send in model data to the view as we did before

app.get("/", (req, res) => {
    res.render("pages/index", siteData);
});
console.log(siteData)

//das ist alte version 
// app.get('/', (req, res) => {
//     res.send(siteView(siteData));
// });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
