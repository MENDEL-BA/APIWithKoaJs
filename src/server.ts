import * as koa from 'koa';
import * as Router from 'koa-router';
import taskRouter from './routes/tasks';
import bodyparser = require('koa-bodyparser');

import logger = require('koa-logger');
const app = new koa();
const router = new Router();
app.use(logger());
app.use(bodyparser());


router.get('/', async(ctx) => {
    ctx.body = 'Welcome to my koa app.';
});

app.use(router.routes())
app.use(taskRouter.routes());
app.listen(3000);


console.log('My koa server is up and listening on port 3000');