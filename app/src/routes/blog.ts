import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json('Blog route created');
});

export default router;
