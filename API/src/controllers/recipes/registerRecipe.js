const knex = require('../../services/connectionSQL');

const registerRecipe = async (req, res) => {

  const id = req.query;

  const {
    name,
    ingredients,
    prepare
  } = req.body;

  try {
    const registeredRecipe = (await knex('client')
      .insert({
        name: name,
        ingredients: ingredients,
        prepare: prepare,
        user_id: id
      })
      .returning('*'))[0];

    return res.status(201).json(registeredRecipe);

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = registerRecipe;
