/*
    A simple API to test file uploads from AndroidArduino app.
    The uploaded files are stored a folder called "file-uploads"
*/

const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const upload = multer({dest:'file-uploads'});

app.post('/sendFile', upload.single('unsent-data'), (req, res) => {
    console.log(req.body);
    res.send("File uploaded");
    console.log("File uploaded");
});

app.listen(PORT, () => {
    console.log(`Test API started on port ${PORT}`);
})

