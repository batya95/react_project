import { makeObservable, observable, action } from 'mobx';
class servicesStore {
    services = [];
    arrServices = [];
    constructor() {
        makeObservable(this, {
            services: observable,
            arrServices: observable,
            setServices: action,
            addNewService: action
        })
    }

    setServices = (data) => {
        if (data.length > 0) {
            this.services = data;
            this.arrServices = this.services.map(service => (
                service.name
            ))
        }
    }

    addNewService = (service) => {
        this.services = [...this.services, service];
        this.arrServices = [...this.arrServices, service.name];
    }
}

export default new servicesStore();

