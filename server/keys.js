module.exports = {
	redisHost: process.env.REDIS_HOST,
	redisPort: process.env.REDIS_PORT,
	pgUser: process.env.PGUSER,
	pgHost: process.env.PGHOST,
	pgDatabase: process.env.PGDATABASE,
	pgPassword: process.env.PGPASSWORD,
	pgPort: process.env.PGPORT
}

/*
In the upcoming lecture, we will be adding some code to our server's index.js to make a query and create a table. Due to a change in the new major version of the Postgres image, we need to modify this code to ensure that we delay the table query until after a connection is made.

In your server/index.js file:

Change these lines:

    pgClient.on('error', () => console.log('Lost PG connection'));

    pgClient
      .query('CREATE TABLE IF NOT EXISTS values (number INT)')
      .catch(err => console.log(err));


to this:

    pgClient.on("connect", (client) => {
      client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch((err) => console.error(err));
    });


Note - Updated to add the client object per Ideologic's feedback here.
*/