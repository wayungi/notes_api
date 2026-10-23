// application configuration
import express from 'express';
const app = express();
app.disable("x-powered-by");
app.get('/api/health', (req, res) => {
    res.status(200).json({
        "status": "UP",
        "message": "Notes API is running"
    });
});
export default app;
//# sourceMappingURL=app.js.map