const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
      include: Product
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const someCategories = await Category.findByPk(req.params.id, {include:Product});
    res.status(200).json(someCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategories = await Category.create(req.body.category_name);
    res.status(200).json(createCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      id: req.params.id,
    },
  );
  try {
    const updateCategories = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        id: req.params.id,
      },
    );
    res.status(200).json(updateCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const createCategories = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(createCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
