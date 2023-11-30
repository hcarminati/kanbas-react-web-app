import * as client from "./client";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

function Account() {
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }

    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password}
                           placeholder="password"
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           password: e.target.value
                                                       })}/>
                    <input value={account.firstName}
                           placeholder="first name"
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           firstName: e.target.value
                                                       })}/>
                    <input value={account.lastName}
                           placeholder="last name"
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           lastName: e.target.value
                                                       })}/>
                    <input value={account.dob}
                           placeholder="birthday"
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           dob: e.target.value
                                                       })}/>
                    <input value={account.email}
                           placeholder="email"
                           onChange={(e) => setAccount({
                                                           ...account,
                                                           email: e.target.value
                                                       })}/>
                    <select onChange={(e) => setAccount({
                                                            ...account,
                                                            role: e.target.value
                                                        })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save}>
                        Save
                    </button>
                    <button onClick={signout}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}

export default Account;