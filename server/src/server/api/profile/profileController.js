const logger = require("../../util/logger")
const Plant = require('../plant/plantModel')

exports.root = (req, res) => {

    const userId = req.user._id

    Plant.find({owner: userId})
    .then(
        function(plants) {
            if (plants) {
                res.json({plants: plants})
            } else {
                res.json({plants: ''})
            }
        })
    .catch(e => console.log(e))
}