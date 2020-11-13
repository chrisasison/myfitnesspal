const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Create a workout name."
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const workout = mongoose.model("Workout", workoutSchema);


module.exports = workout;