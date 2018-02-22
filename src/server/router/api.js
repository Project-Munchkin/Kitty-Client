import express from "express";
import axios from "axios";
const router = express.Router();

const url = ''; // 여기에 서버 url을 넣으면 됌.

router.post('/result', (req, res, next) => {

    axios.post(url).then((response)=>{
        res.json({
            status: 200,
            result: response.data
        });
    });
});

export default router;