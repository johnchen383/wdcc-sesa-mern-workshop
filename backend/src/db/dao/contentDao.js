import { Content } from "../schema"

async function createContent(content) {
    const dbContent = new Content(content);
    await dbContent.save();
    return dbContent;
}

async function getContent(sId) {
    let query 
    query = { "id": { $eq: sId } }

    return Content.find(query);

    // findById(query);
}


export {createContent, getContent}