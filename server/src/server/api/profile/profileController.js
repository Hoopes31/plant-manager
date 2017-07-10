const logger = require("../../util/logger")
const Plant = require('../plant/plantModel')

exports.root = (req, res) => {

    //Mock Data Set for return
    //grab user Id
    const userId = req.user._id
    //grab plants by user Id & serve
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