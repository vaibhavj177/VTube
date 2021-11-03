const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;
const sassMiddleware = require('node-sass-middleware');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server started and running on port: ${port}`);
})