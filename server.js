const express = require('express');
const app = express();
const PORT = 3000;

const tables = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID:"",
    }
]

const waitlist = [];

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//html Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html')));


//API routes

app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitlist));

app.post('/api/tables', (req, res) => {
    const table = (req.body);
    if(tables.length <6) {
        tables.push(table);
        res.json(true)
    }else {
        waitlist.push(table);
        res.json(false);
    }
});

// Displays all characters
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html')));

// Displays a single character, or returns false
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html')));

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });