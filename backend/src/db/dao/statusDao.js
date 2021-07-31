import { Status } from "../schema"

async function changeStatus(status) {
    await Status.updateOne({}, {status: status});
    return getStatus(); 
}

 async function getStatus() {
    const status = await Status.findOne(); 
    return status.status;
 }


export {changeStatus, getStatus}