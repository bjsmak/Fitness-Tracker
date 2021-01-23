const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

//Routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

//Listen
app.listen(PORT, ()=> {
    console.log('Listening on port' + PORT);
})