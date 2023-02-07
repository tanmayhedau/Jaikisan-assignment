let express = require("express");
let mongoose = require("mongoose");
let route = require("./route/route");
let app = express();

app.use(express.json());
mongoose.set("strictPopulate", false);
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://tannmayhedau619:Tanmay%40619@cluster0.fw1xhuw.mongodb.net/jaikisan-assignment",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(3000, () => console.log("express App running on Port 3000"));
