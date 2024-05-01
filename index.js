import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';

// Set the view engine to handlebars
const app = express();
let __dirname = path.resolve(); // Add this line

__dirname = path.resolve();

// Set the view engine to handlebars
app.set('view engine', 'hbs');

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set assets directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define a route to render index.hbs
app.get('/', (req, res) => {
    res.render('index');
});

// About page with dashboard layout
app.get('/about', (req, res) => {
    res.render('about', { layout: 'dashboard' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});