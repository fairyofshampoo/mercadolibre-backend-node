const {rol} = require ('../models')

let self = {}

// GET: api/roles
self.getALL = async function (req, res) {
    let data = await rol.findAll({ attributes: ['id', 'nomre']})
    res.status(200).json(data)
}

module.exports = self