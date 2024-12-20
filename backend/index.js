const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const matchRoutes = require('./routes/matchRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/match', matchRoutes);


app.get('/', (req, res) => {
    res.send('Mentorship Matching Platform API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
