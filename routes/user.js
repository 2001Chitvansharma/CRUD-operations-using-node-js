const express = require('express')
const {getuser,
    createuser,
    deleteuser,
    updateuser,
    updateuser1} = require("../controllers/User")
    const router=express.Router()
router.patch('/upd',updateuser1)
router.patch('/up',updateuser)

router.delete('/:id',deleteuser)

router.get('/',getuser)
router.post('/create', createuser)

module.exports = router