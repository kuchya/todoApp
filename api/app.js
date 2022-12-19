const PORT = 4000;

const express = require('express');
const cors = require('cors');

require('./helpers/init_mongo');

const app = express();

app.use(cors());
app.use(express.json())

const TodoRouter = require('./routes/todo.route');
app.use('/todo', TodoRouter)

app.listen(PORT, () => {
    console.log('server is listening on port: ' + PORT);
});
