


export class Message{
    constructor(user, date, message){
        this.user = user;
        this.datetime = date;
        this.message = message;
    }


}
export class User{
    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
    }
    escribirMensaje( message){
        const date = new Date(Date.now());
        const datetime= date.toISOString();


        const msg = new Message(this, datetime , message);
        return msg
    }

}



const user  = new User("asd","asd").escribirMensaje("hello" );
console.log(user);

