# RedBeanNode Docs

## Welcome

RedBeanNode is an easy to use **ORM** tool for Node.js, inspired by RedBeanPHP. 

* **Automatically** creates **tables** and **columns** as you go
* No configuration, just fire and forget
* Ported RedBeanPHP's core features and api design
* Build on top of knex.js
* Supports **JavaScript** & **TypeScript**
* **async/await** or **promise** friendly

## Supported Databases

* MySQL / MariaDB
* SQLite

## Code Example

This is how you do CRUD in RedBeanNode:

```javascript
const {R} = require("redbean-node");

R.setup();

(async () => {
    let post = R.dispense('post');
    post.text = 'Hello World';

    // create or update
    let id = await R.store(post);

    // retrieve
    post = await R.load('post', id);

    console.log(post);

    // delete
    await R.trash(post);

    // close connection
    await R.close();
})();

```

This **automatically generates** the tables and columns... on-the-fly. It infers relations based on naming conventions.


## Zero Config

No verbose XML files, no annoying annotations, no YAML or INI. Zero Config. Just start coding.

## Fluid Schema

During development, RedBeanPHP will adapt the database schema to fit your needs, giving you the **NoSQL** experience. When deploying to production servers, you can freeze the schema and benefit from performance gains and referential integrity.
RedBeanNode offers the best of both worlds!
