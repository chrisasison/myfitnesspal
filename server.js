const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlPaser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


app.use(require("./routers/front-end"));
app.use(require("./routers/api-router"));


app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`)
});