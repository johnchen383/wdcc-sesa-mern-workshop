import mongoose from "mongoose"

const Schema = mongoose.Schema;

// Content
const schemaContent = new Schema(
    {
        id: {type: String, required: true},
        content: {type: String, required: true},
        type: {type: String, required: true}
    },
    {
        timestamp: {},
    }
);

const Content = mongoose.model("Content", schemaContent);

// Status
const schemaStatus = new Schema(
    {
        status: {type: Number, required: true},
    },
    {
        timestamp: {},
    }
);

const Status = mongoose.model("Status", schemaStatus);

export {Content, Status};
