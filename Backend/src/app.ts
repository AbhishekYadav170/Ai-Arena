
import express from "express";
import cors from "cors";
import runGraph from "./ai/graph.ai.js";

const app = express();

app.use(cors());

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