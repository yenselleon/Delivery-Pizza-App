import { v4 as uuidv4 } from "uuid";


export class UserModel {

    uid = "";
    name = "";
    state = true;
    rol = "User_Rol";
    adress = '';
    phone = "";
    email = "";


    constructor (name = "",
                 rol = "User_Rol",
                 adress = "",
                 phone = "",
                 email = "",
                 password = "",
                 ){
        this.uid = uuidv4();
        this.name = name;
        this.state = true;
        this.rol = rol;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

}