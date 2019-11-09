import { Router } from 'express';

const router = Router();

router.get('*', (request, response) => {
	response.send('hello render to string...');
});

export default router;