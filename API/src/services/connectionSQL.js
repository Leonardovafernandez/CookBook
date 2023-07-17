const knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString: "postgres://gqpxfkhn:LlwAUMxD5pBMHL9-OfqJ5_W9gftzJIlG@snuffleupagus.db.elephantsql.com/gqpxfkhn"
    }
});

module.exports = knex;
