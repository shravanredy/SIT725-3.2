const express = require('express');
const app = express();
const port = 3005;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});