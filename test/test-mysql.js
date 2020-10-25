const {R} = require("../dist/redbean-node");
const assert = require('assert');
const knex = require("knex");

let dbName = "test" + Date.now();
let host;
if (process.env.MYSQL_DATABASE === "test") {
    host = "localhost";
    user = "root"
    password = "PYHjnKBBDl";
} else {
    host = "192.168.0.12";
    user = "root";
    password = "PYHjnKBBDl";
}

describe("Prepare MySQL database", async () => {
    R.freeze(false);
    R.debug(false);

    let k = knex({
        client: "mysql",
        connection: {
            host: host,
            user: user,
            password: password,
        }
    });
    await k.raw('CREATE DATABASE ??', [dbName]);
    await k.destroy();
})

describe("MySQL", () => {
    it("#R.setup()", async () => {

        R.setup("mysql", {
            host: host,
            user: user,
            password: password,
            database: dbName
        });

        assert.equal(R.dbType, "mysql");
    });

    it("#R.setup() with mariadb", () => {
        R.setup("mariadb", {
            host: host,
            user: user,
            password: password,
            database: dbName
        });
        assert.equal(R.dbType, "mysql");
    });

    let commonDir = "common";
    let normalizedPath = require("path").join(__dirname, commonDir);

    require("fs").readdirSync(normalizedPath).forEach(function(file) {
        require(`./${commonDir}/` + file)();
    });


});

describe("Close Connection", () => {
    it("#R.close()", async () => {
        await R.close();
    });
});

