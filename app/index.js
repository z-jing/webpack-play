var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = 'hello index.js';
app.appendChild(sub());
document.body.appendChild(app);
require('./main.css');