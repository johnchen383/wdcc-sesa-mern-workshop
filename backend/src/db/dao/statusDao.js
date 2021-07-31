import { Status } from "../schema"

async function createStatus(status) {
    const dbStatus = new Status(status);
    await dbStatus.save();
    return dbStatus;
}

// async function getContent(sId) {
//     let query 
//     query = { "id": { $eq: sId } }

//     return Content.find(query);

//     // findById(query);
// }


export {createStatus}