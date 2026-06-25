const { Pool } = require("pg")

const pool = new Pool({
    host: "localhost",
    user: "madders",
    database: "members_only",
    password: "markxlii",
    port: 5432
})

module.exports = { pool }