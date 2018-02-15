import http from 'http'

import Express from 'express'
import bodyParser from 'body-parser'

const app = new Express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

app.set('etag', false);
app.set('x-powered-by', false);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "50mb"}));

// API v1
app.use('/api', ImageApiV1);
app.use(ErrorHandler);

process.on('SIGINT', () => {
    server.on('close', () => {
        process.exit(0);
    });
});

app.listen(port, () => {
    if (process.env.pm_id) {
        console.log('Server start', process.env.pm_id);
    } else {
        console.log('Server start');
    }
});
