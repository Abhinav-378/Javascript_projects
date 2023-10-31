class User{
    username;
    password;
    constructor(u,p){
        this.username = u;
        this.password = p;

    }
    setUsername(u){
        this.username = u;
    }
    setPassword(p){
        this.password = p;
        const cap = (/[A-Z]/.test(this.password))
        const dig = (/\d/.test(this.password))
        const size = (this.password.length>=8)
        if(cap && dig && size){
            console.log("Password Set");
        }
        else{
            console.log("Password must be at leat 8 char long, and contain at least one number and one uppercase letter");
        }
    }

    getPassword(){        
        if(this.password == "undefined"){
            console.log("Set Password");
        }else{
            console.log("*".repeat((this.password).length));
        }
    }
}

const u1 = new User();
u1.setUsername("Abhi");
u1.setPassword("passworddd");
u1.setPassword("Passw123");
u1.getPassword();