export class SignInData {

    private email:string;
    private password:string;

    constructor(email:string,passsword:string){
        this.email =email;
        this.password=passsword;
    }
    getEmail():string{

        return this.email;

    }
    getPassword():string
    {
        return this.password;
    }
}