import express from 'express';
import megaverseRoutes from './routes/megaverseRoutes.js';
import morgan from "morgan";

const app = express();
const PORT = 5000; 

app.use(express.json());
app.use(morgan('dev'));



app.use('/api', megaverseRoutes);


app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
