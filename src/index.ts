import express from 'express';
const app = express();
const port = 3000;


app.disable("x-powered-by");

app.get('/api/health', (req, res) => {
  res.status(200).json({
    "status": "UP",
    "message": "Notes API is running"
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});