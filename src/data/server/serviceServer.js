
import servicesStore from "../stores/serviceStore";
import axios from "axios";

async function getServices() {
    const services = await axios.get("http://localhost:8787/services");
    servicesStore.setServices(services.data);
}

const addServiceToServer = async (service) => {
    const res = await axios.post("http://localhost:8787/service", service)

    if (res.status === 200) {
        servicesStore.addNewService(service);
    }
    else {
        console.log("faild");
    }
}
export default { getServices, addServiceToServer };