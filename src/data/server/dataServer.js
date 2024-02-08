import axios from "axios";
import bussinessStore from "../stores/bussinessStore";

async function getBusiness() {
    const business = await axios.get("http://localhost:8787/businessData");
    bussinessStore.editDetails(business.data);
}
const putBusinessToServer = async (business) => {
    const res = await axios.post("http://localhost:8787/businessData", business)
    if (res.status === 200) {
        bussinessStore.editDetails(business);
    }
    else {
        console.log("faild");
    }
}

export default { getBusiness, putBusinessToServer };