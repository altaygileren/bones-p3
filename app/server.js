// template taken from fullstack-crud
const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRouter = require('./routes/authRouter');

const PORT = 3001;

app.use(logger('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// not as good as coors but accepts foreign requests, 
// albeit in a less merry fashion
app.use(cors());

app.use('/auth', authRouter);

// activates server on port and confirms messsage
app.listen(PORT, () => console.log('listening on port: ', PORT));