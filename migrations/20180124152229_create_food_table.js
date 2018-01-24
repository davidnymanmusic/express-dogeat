module.exports = {
  up(knex) {
    return knex.schema.createTable('foods', (table) => {
      table.increments(); //id
      table.string('food_name', 200).notNull(); //food.food_name
      table.string('edible', 10).notNull(); // food.edible
      table.text('description').notNull(); // food.description
      table.timestamps(false, true);
    });
  },

  down(knex) {
    return knex.schema.dropTable('foods');
  }
}
