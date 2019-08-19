const router = require('express').Router();
const controllers = require('../controllers/admin');

router.get('/', controllers.dashboard_controller.index);

router.get('/categories', controllers.categories_controller.all);
// router.get('/categories', controllers.categories_controller.index);

router.get('/category/create', controllers.categories_controller.create_get);
router.post('/category/create', controllers.categories_controller.create_post);

router.get('/category/:id/delete', controllers.categories_controller.delete_get);
router.post('/category/:id/delete', controllers.categories_controller.delete_post);

router.get('/category/:id/update', controllers.categories_controller.update_get);
router.post('/category/:id/update', controllers.categories_controller.update_post);

module.exports = router;
