import mongoose from "mongoose"

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        id: {type: String, required: true},
        content: {type: String, required: true},
        type: {type: String, required: true}
    },
    {
        timestamp: {},
    }
);

const Content = mongoose.model("Content", schema);

export {Content};
