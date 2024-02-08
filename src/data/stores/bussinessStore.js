import { makeObservable, action, observable } from 'mobx';

class businessStore {
    details = {
        name: 'R Klopman',
        address: 'Ashdod',
        mail: 'klopman6@gmail.com',
        phone: '058-3213255',
    }
    constructor() {
        makeObservable(this, {
            editDetails: action,
            details: observable
        })
    }
    editDetails = (detailsToUpDait) => {
        if (detailsToUpDait.name != null && detailsToUpDait.address != null && detailsToUpDait.phone != null && detailsToUpDait.mail != null) {
            this.details = detailsToUpDait;
        }

    }
}
export default new businessStore();
