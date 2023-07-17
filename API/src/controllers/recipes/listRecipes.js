const knex = require('../../services/connectionSQL');

const listRecipe = async (req, res) => {
    const { search } = req.query
    let recipeList = [];

    try {
        if (search && isNaN(search)) {
            recipeList = await knex('recipes')
                .whereILike('name', `%${search}%`)
            return res.status(200).json(recipeList);
        }

        recipeList = await knex('recipes');

        return res.status(200).json(recipeList);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

module.exports = listRecipe;