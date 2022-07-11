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
                setuserState(result) 
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchingData();

    },);

    const { name, email, avatar, image } = userState;

    /*
        Aca necesito saber el uso de la variable { isLoggedIn }
        asi como se esta usando no esta cumpliendo ningun uso, porque?
        Resulta que solo sera interpretada como 'true' o 'false'
        pero no estaria encerrando un componente o algo por el estilo
        entonces estaria demas, pero si por ejemplo quieres que valide
        que si o si este loggeado, entonces la forma correcta seria

        { isLoggedIn && <div className="container">
            ...
        </div>} 

        Pero esta logica de mostrar o no el componente ya un middleware
        lo hacia por ti, entonces no tienes que preocuparte aca
        de esta validacion ya que la hiciste previamente, entonces
        seria mejor que directamente no la uses!
     */
    return (
        <>
        {isLoggedIn}
            <div className="container">
                <div><img src={image} alt={avatar} width={100} height={100} /></div>
                <div>{avatar}</div>
                <div>{name}</div>
                <div>{email}</div>
                <div> </div>
            </div>
        </>
    )
}

export default UserData;