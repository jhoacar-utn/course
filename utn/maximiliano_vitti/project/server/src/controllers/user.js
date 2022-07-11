const { User } = require("../models");
const { getPayloadData } = require("../helpers/handleJWT");

const getDatabaseAvatars = async (req, res,next) => {
        
    try{

        const avatars = await User.customFindAll();

        console.log(avatars);

        //me trae un array del tipo  body	"[{\"avatar\":\"wartortle\"},{\"avatar\":\"wartortle\"},{\"avatar\":\"squirtle\"}]"
        //no se como solucinarlo para que quede " body ":[" Avatar 1", " Avatar 2",...]

        /*
            Lo que debes hacer aca es hacer uso de la function map!

            La funcion map, unica y exclusivamente funciona en vectores, entonces
            al llamarla le pasas la callback con la cual deseas que se transforme
            o 'mapee' cada elemento de ese array, en resumen, lo que necesitas es:

            const users = await User.customFindAll();
            
            const avatars = users.map((user)=>{return user.avatar});

            OJO que el JSON.stringify no lo necesitas hacer, solo lo mandas
            asi tal cual, porque que al final express entiende que es un objeto
            y lo enviara asi, si le dices con .stringify, el entendera que sera
            un string y no lo es, es un array!!

            return res.json({
                message: "Lista de Avatars en la base de datos",
                body: avatars //JSON.stringify(avatars)
            })
        */
        return res.json({
            message: "Lista de Avatars en la base de datos",
            body: JSON.stringify(avatars)
            });
    

    } catch (error) {   
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

const getUserData = async (req, res) => {

    try{

        /**
            Como bien comentas la logica esta bien la que planteas
            pero la forma en como lo declaras no lo es, que necesitas
            hacer:

                - La extraccion del token esta correcta y la validacion
                quizas no deberias hacerla lanzando una excepcion, capaz
                te conviene realizar lo siguiente:

                    const {token} =  req.query;

                    if(!token)
                        return res.status(400).json({
                            error: "Token is required"
                        });

                Asi se sale del controlador mandando ya la respuesta y no continua
                
                - Recordando un poco como funciona JSONWebToken, bueno resulta
                que lo que nosotros hacemos con el, es decirle directamente
                que guarde un objeto como si fuera un token, que lo haga en 
                un hash, que lo encripte, luego nosotros ese token se lo mandamos
                al usuario, pero no es nada mas que una representacion de la 
                informacion que el posee, entonces que es lo que deberia pasar
                cuando haces el 'getPayloadData(token)' que va a devolverte
                el objeto que se guardo, si claramente es correcto el token
                o directamente no ha expirado, entonces que devuelve esta
                funcion? 
                
                Lo que metiste en el token cuando el usuario hizo login

                    const payload = {
                        email: user.email,
                        name: user.name
                    }
                
                    const token = await getJsonWebToken(payload);
                
                Entonces sabes que ingresaste en ese token que le mandas
                al usuario el correo y el nombre, pues bueno hagamos eso:

                    const payload = getPayloadData(token);

                    if(!payload)
                        return res.status(401).json({
                            error: "Token is incorrect o expired"
                        });

                    const { email } = payload;
                
                - Ya con eso tenemos para ir a buscar la informacion a la base
                de datos, pero aun seguimos teniendo un problemita:

                    const userData = await User.customFindOne({ email: email });

                Aca cuando envias el 'body: {userData}' fijate el error tremendo
                que esta ocurriendo, al final estas mandando un objeto adentro
                de otra declaracion de objeto, cuando venga node y te reemplace
                esta variable llamada 'userData' hara lo siguiente:

                        body : { { name: 'dasdas', ... } } 

                Esto no funcionara porque no sera bien interpretado, entonces
                ten mucho cuidado con esto de utilizar las llaves, si por ejemplo
                queres sacarle toda la informacion y añadirle una nueva o reemplazar
                la que tiene, seria usando el spread operator (...) :

                        body: { ...userData , nuevoCampo: 'este campo ha sido inyectado' }


                    return res.json({
                        message: "Perfil del Usuario logueado",
                        body: userData // {userData}
                    });

         */

        const {token} =  req.query;

        if (token) {

            const email  = getPayloadData(token)

            //console.log(email);

            const userData = await User.customFindOne({ email: email });

            console.log(userData);

            return res.json({
                message: "Perfil del Usuario logueado",
                body: {userData}
            });

        }
        else{
            throw "token is not valid";
        }

        //console.log(token);


    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });

    }

}

module.exports = {
    getDatabaseAvatars, getUserData
}