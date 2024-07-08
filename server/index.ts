import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
