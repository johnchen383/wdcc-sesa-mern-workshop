import {Content} from "../schema"

async function createContent(content) {
    const dbContent = new Content(content);
    await dbContent.save();
    return dbContent;
}

async function getContent(id) {
    return Content.findById(id);
}

export {createContent, getContent}