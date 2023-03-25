const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

const TextAPI = require('./text/api-text.controller')

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors({ 
  origin: 'http://localhost:4200',
  credentials: true
}))
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api/text', TextAPI)

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
