import express from 'express'
import axios from 'axios';
import path from 'path';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());


app.get('/prayer-times', (req, res) => {
    const { city, country } = req.query;

    let params = {
        country: country,
        city: city
    };

    axios.get('http://api.aladhan.com/v1/timingsByCity', { params: params })
        .then(response => {
            res.json(response.data.data);
        })
        .catch(error => {
            res.status(500).send(error.toString());
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});