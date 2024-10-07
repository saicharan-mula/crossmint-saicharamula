import express from 'express';
import MegaverseController from '../controllers/MegaverseController.js';

const router = express.Router();


router.post('/goal-map/create', MegaverseController.createFromGoalMap);

router.post('/polyanets', MegaverseController.createPolyanet);
router.delete('/polyanets', MegaverseController.deletePolyanet);
router.post('/soloons', MegaverseController.createSoloon);
router.delete('/soloons', MegaverseController.deleteSoloon);
router.post('/comeths', MegaverseController.createCometh);
router.delete('/comeths', MegaverseController.deleteCometh);
router.get('/goal-map', MegaverseController.getGoalMap);

export default router;
