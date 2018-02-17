import express from "express";
import MobileDetect from "mobile-detect";

const router = express.Router();

router.get('/', (req, res, next)=>{
    const md = new MobileDetect(req.headers['user-agent']);

    res.type('.html');
    if(md.mobile()){
        res.redirect('/static/mobile/html/index_origin.html');
    }
    else {
        res.redirect('/static/pc/html/index_origin.html');
    }
});

export default router;