import express from 'express';
import mongoose from 'mongoose';
import AuthRoutes from './routes/auth';
import NotesRoutes from './routes/notes';
const app = express();
import env from 'dotenv';
import cors from 'cors';
env.config();
const port = process.env.PORT || 8001;
const mongoUri = process.env.MONGODB_URI;
const corsOptions = {
    origin: ['http://localhost:5173', 'https://your-netlify-site-name.netlify.app'],
    optionsSuccessStatus: 200
  };
if (!mongoUri) {
    console.error('FATAL ERROR: MONGODB_URI is not defined in the .env file.');
    process.exit(1);
}

console.log('Attempting to connect with MONGODB_URI:', mongoUri);

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', AuthRoutes);
app.use('/api/notes', NotesRoutes);

app.get('/', (req, res) => {
    res.send('Hello!');
});

mongoose.connect(mongoUri)
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
    });

app.listen(port, () => {
    return console.log(`Server Running on at http://localhost:${port}`);
});