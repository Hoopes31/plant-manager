const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PlantSchema = new Schema ({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    plantName: {
        type: String,
        required: true
    },
    plantType: {
        type: Object
    },
    waterDate: {
        type: Date
    },
    feedDate: {
        type: Date
    }
})
module.exports = mongoose.model("plant", PlantSchema)