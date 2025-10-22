import express from 'express';

const app = express();

app.use(express.static('dist'))   //middlewares

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });


// Fixed /jokes route
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "Lazy Dog", content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { id: 2, title: "Math Humor", content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else." },
        { id: 3, title: "Computer Joke", content: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 4, title: "Food Joke", content: "Why don’t eggs tell jokes? They’d crack each other up." },
        { id: 5, title: "Space Humor", content: "Why did the moon skip dinner? It was already full." }
    ];
    res.json(jokes); // Send JSON response
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
