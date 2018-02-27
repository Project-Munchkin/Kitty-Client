import express from "express";
import axios from "axios";

const router = express.Router();

// const url = 'http://dpm-munchkin.herokuapp.com/products/match';
const url = 'http://127.0.0.1/products/match';

router.post('/result', (req, res, next) => {

    const data = {
        arm: req.body.arm,
        bodyType: req.body.bodyType,
        brandName: req.body.brand,
        category: req.body.clothesType,
        gender: req.body.gender,
        height: req.body.height,
        shoulder: req.body.shoulder
    };

    axios.post(url, data).then((response) => {
        res.json({
            status: 200,
            result: response.data.data
        });
    });

});

export default router;