import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


const PORT = 5000
const app = express()
const logger = morgan('dev')


app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleServerResponse = () => {
  console.log(`server ready on localhost:${PORT}`)
}

app.listen(PORT, handleServerResponse)
