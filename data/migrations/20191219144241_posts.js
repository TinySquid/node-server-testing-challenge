
exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
    tbl.increments();

    tbl.string("title")
    .notNullable();

    tbl.string("category")
    .notNullable();

    tbl.text("description")
    .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};
