import { Router } from 'express';
import { parseFile } from '../middlewares/handleFiles.js';
import { celebrate } from 'celebrate';
import { idSchema } from '../validation/task.js';
import { addOrUpdateUserPhoto } from '../controllers/users.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = Router();
router.use(checkToken);

router.patch(
  '/photo',

  parseFile.single('photo'),
  addOrUpdateUserPhoto,
);

export default router;
