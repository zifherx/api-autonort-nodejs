import {Router} from 'express';
import helperCtrl from '../controllers/helper.controller';
const router = Router();

router.post('/send-email',helperCtrl.enviarCorreo);

export default router;