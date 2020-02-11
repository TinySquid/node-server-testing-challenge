
exports.seed = function(knex) {
      return knex('posts').insert([
        {title: "React is a library, not a framework", category: "React", description: 'CHANGE MY MIND'},
        {title: "Getting started with Javascript promises", category: "JavaScript", description: 'Blah blah blah'},
        {title: "Testing a Node API", category: "JavaScript", description: 'Blah blah blah'},
      ]);
};
