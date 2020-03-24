const config = {
    user: 'postgres',
    host: process.env.db_host,
    // host: "postgres",
    // host: "localhost",
    database: "playdb",
    password: "0910shc",
    port: "5432",
    // connectionString: process.env['DATABASE_URL']
};

exports.config = config;