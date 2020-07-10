const router = require('express').Router();

router.post('/try', (req, res)=>{

    const a = req.body.happy
    const b = {'hello': 'ok'}
    res.send(b)
})

module.exports = router;