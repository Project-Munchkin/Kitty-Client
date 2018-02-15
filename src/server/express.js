import http from "http";
import path from "path";

import Express from "express";
import bodyParser from "body-parser";
import Router from "./router";

const app = new Express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

app.set('etag', false);
app.set('x-powered-by', false);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "50mb"}));

// router
app.use('/static', Express.static(path.resolve(process.cwd(), './dist')));
app.use(Router);


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
