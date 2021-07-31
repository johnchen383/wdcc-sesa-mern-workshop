import {Content} from "../schema"

async function createContent(content) {
    const dbContent = new Content(content);
    await dbContent.save();
    return dbContent;
}

export {createContent}