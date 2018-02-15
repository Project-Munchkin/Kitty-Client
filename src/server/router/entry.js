import express from "express";

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.type('.html');
    res.redirect('/static/mobile/html/index.html');
});

export default router;