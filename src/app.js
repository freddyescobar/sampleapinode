
const express = require("express");
const dogRoutes = require("./routes/dog.routes");

const app = express();

app.use(dogRoutes);

const PORT = 9900;



app.listen(PORT, (err) => {
    console.log("The serves has been started!!");
});
