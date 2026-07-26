// import express from "express";
// import runGraph from "./ai/graph.ai.js";



// const app = express();

// app.get('/', async (req, res) => {
//     const result = await runGraph("What an code for Factorial function in js?")
//     res.json(result)
// }) 

// export default app;




import express from "express";
import cors from "cors";
import runGraph from "./ai/graph.ai.js";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
}));


app.use(express.json());



app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    console.log("Question:", question);

    const result = await runGraph(question);

    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

export default app;