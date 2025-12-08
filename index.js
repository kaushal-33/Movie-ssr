const express = require("express");
const indexRouter = require("./routes/indexRouter");
const adminRouter = require("./routes/adminRouter");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use("/", indexRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log("server started.....");
})