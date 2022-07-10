import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/store';
import { getUserData } from "../services/userData";

function UserData() {

    const { isLoggedIn } = useContext(AppContext);

    const [userState, setuserState] = useState({
        name: "",
        email: "",
        avatar: "",
        image: ""
    });

    useEffect(() => {

        const fetchingData = async () => {
            try {
                const result = await getUserData();
                //console.log(result);
                setuserState(result) 
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchingData();

    },);

    const { name, email, avatar, image } = userState;

    return (
        <>
        {isLoggedIn}
            <div className="container">
                <div><img src={image} alt={avatar} width={100} height={100} /></div>
                <div> </div>
                <h1> <div>{avatar}</div> </h1>
                <div> </div>
                <h2> <div>{name}</div> </h2>
                <div> </div>
                <h2><div>{email}</div> </h2>
                <div> </div>
            </div>
        </>
    )
}

export default UserData;