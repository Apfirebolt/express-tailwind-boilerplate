import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// Load config
dotenv.config();

// Connect to MongoDB
connectDB();

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

// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set session middleware
app.use(
    session({
      secret: "app_secret",
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      cookie: { path: "/", httpOnly: true, maxAge: 36000000 },
    })
  );

// Set passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set assets directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define a route to render index.hbs
app.get('/', (req, res) => {
    res.render('index', { 'pageTitle': 'Home' });
});

// About page with dashboard layout
app.get('/about', (req, res) => {
    res.render('about', { layout: 'dashboard', 'pageTitle': 'About' });
});

app.get('/login', (req, res) => {
    res.render('login', { 'pageTitle': 'Login' });
})

app.get('/register', (req, res) => {
    res.render('register', { 'pageTitle': 'Register' });
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});