const express = require('express');
require('dotenv').config();
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/pastor-aleman', (req, res) => {
  res.render('pastor_aleman');
});

app.get('/golden', (req, res) => {
  res.render('golden');
});

app.get('/pequines', (req, res) => {
  res.render('pequines');
});



app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
