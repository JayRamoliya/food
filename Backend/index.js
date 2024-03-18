
const express = require('express');
const connectdb = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000; 

const Recipe = require('./models/Recipe');
const cors = require('cors');

app.use(cors());


app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();

        res.status(200).json({ success: true, data: recipes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ success: false, error: 'Recipe not found' });
        }

        res.status(200).json({ success: true, data: recipe });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});



const start = async () => {
    try {
        await connectdb()
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am live`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();
