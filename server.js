import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/database.js'
import usersRouter from './routes/userRoutes.js';
import skillSwapRouter from './routes/skillSwapRoutes.js';
import skillRouter from './routes/skillRoutes.js';
import adminRouter from './routes/adminRoutes.js';


// Connect MongoDB
await connectDB();

const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
// app.use('/',protect,dashboardRouter)
app.use("/api/users", usersRouter);
app.use("/api/skill-swaps", skillSwapRouter);
app.use("/api/skills", skillRouter);

app.use('/api/admin', adminRouter)


app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
})

