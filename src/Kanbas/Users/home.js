import {Navigate, Route, Routes} from "react-router-dom";
import Nav from "./nav";
import Signin from "./signin";
import Account from "./account";
import UserTable from "./table";
import Signup from "./signup";

function AccountHome() {
    return (
        <div className="d-flex">
            <div className="m-3">
                <Nav/>
            </div>
            <div className="kanbas-content m-3">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account/home"/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/account/:id" element={<Account/>}/>
                    <Route path="/users" element={<UserTable/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default AccountHome;