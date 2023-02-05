
var moment = require('moment');

class User{
    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
    }
    escribirMensaje(user, message){
        const moment = require('moment');
        const date = moment().format('DD/MM/YYYY');
        const time = moment().format('hh:mm A');

        const msg = new Message(user, date , time , message);
        return msg
    }

}

class Message{
    constructor(user, date, time, message){
        this.user = user;
        this.date = date;
        this.time = time;
        this.message = message;
    }


}