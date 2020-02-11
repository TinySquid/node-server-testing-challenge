const knex = require("../../data/dbConfig");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  if (id) {
    return knex
      .select("*")
      .from("posts")
      .where({ id: id });
  } else {
    return knex.select("*").from("posts");
  }
}

function insert(post) {
  return knex("posts").insert(post, "id");
}

function update(id, changes) {
  return knex("posts")
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return knex("posts")
    .where({ id: id })
    .del();
}
