import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.ATLAS_URI)
     .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
     .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
     res.send('Hello from Home');
});

app.get('/products', (req, res) => {

});

app.get('/products/:id', (req, res) => {
     res.send(`Hello from Products ${req.params.id}`);
});

app.post('/products', (req, res) => {
     res.send('Hello from Products POST');
});