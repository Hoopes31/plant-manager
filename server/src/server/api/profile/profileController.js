const logger = require("../../util/logger")

exports.root = (req, res) => {

    //Mock Data Set for return

    //TEST: Watch it LOG

    //Send it to your Client as a JSON object
    res.json('Some data')

    //Don't break your server
    res.end()
}