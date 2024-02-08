import { observer } from "mobx-react"
import Login from "./Login"
import AdminHome from "./AdminHome"
import dataStore from "../../data/stores/dataStore"
const AdminPage = (observer((props) => {

    return (
        <>
            {!dataStore.isLogin ? <Login /> : <AdminHome isAdmin={props.isAdmin} />}
        </>
    )
}))

export default AdminPage