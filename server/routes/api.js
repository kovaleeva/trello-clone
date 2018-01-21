const koaRouter = require('koa-router');
const { Client } = require('pg');
const config = require('../config');

const db = new Client(config.db);
db.connect();

const router = new koaRouter();

router
    .get('/api/boards', async ctx => {
        let data = null;
        try {
            const { rows } = await db.query(`select * from boards`)
            ctx.body = rows;
        } catch (e) {
            ctx.body = e;
            ctx.status = 500;
            console.error(e);
            return;
        }
    })

module.exports = router;