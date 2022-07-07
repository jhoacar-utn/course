import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/store';
import { getUser } from "../services/userData";

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
                const result = await getUser();
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
                <div>Nombre: {name}</div>
                <div>mail: {email}</div>
                <div><img src={image} alt={avatar} width={100} height={100} /></div>
            </div>
        </>
    )
}

export default UserData;