
import {User, Message} from "./user.js";

const cmallea = new User("cmallea", "./images/9.jpg" );
const Ivannia = new User("Ivannia", "./images/5.jpg" );

const chat = document.querySelector(".chat");
const chat_input_text = document.querySelector(".chat-input-text");

chat_input_text.addEventListener('keyup', onInputEnter);

if(!localStorage.getItem('msgs')){
    localStorage.setItem('msgs', JSON.stringify([]));
}
else{
    let msgsArray = JSON.parse(localStorage.getItem('msgs'));
    msgsArray.forEach(element => {
        console.log(element);
        writeFirstLine(element);
    });

}


function onInputEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if(e.target.value !== ""){
            let msg =  cmallea.escribirMensaje(e.target.value)
            console.log(msg);
            pushNewMessage(msg);
        }

        e.target.value ="";
    }

}

function pushNewMessage(mensaje){
    let mensajes = JSON.parse(localStorage.getItem('msgs'));
    if(mensajes.length>0){
        let mensaje_anterior = mensajes[mensajes.length-1];
        console.log("1111");
        const same_user = mensaje_anterior.user.name == mensaje.user.name;
        const lesser_than_one_minute = moment.duration(moment(mensaje.datetime).diff(moment(mensaje_anterior.datetime))).seconds() < 10;

        console.log(same_user);
        console.log(moment.duration(moment(mensaje.datetime).diff(moment(mensaje_anterior.datetime))).seconds());
        console.log(lesser_than_one_minute);
        if (same_user && lesser_than_one_minute){
            console.log("estoy acaaaa");
            writeLine(mensaje);
            mensajes.push(mensaje);
            localStorage.setItem('msgs', JSON.stringify(mensajes));
            return mensaje;
        }

    }   
    writeFirstLine(mensaje);
    mensajes.push(mensaje);
    localStorage.setItem('msgs', JSON.stringify(mensajes));
    return mensaje;

}




function writeFirstLine(mensaje){

    const linesGroup = document.createElement("div");
    linesGroup.classList.add("linesGroup");
    const firstline = document.createElement("div");
    firstline.classList.add("firstline");
    
    const circleLinesGroup = document.createElement("div");
    circleLinesGroup.classList.add("circleLinesGroup");
    const circleLinesGroup_img = document.createElement("img");
    circleLinesGroup_img.setAttribute("src", "./images/9.jpg");
    
    const msg = document.createElement("div");
    msg.classList.add("msg");
    
    const first_p= document.createElement("p");
    first_p.innerText=cmallea.name;
    const first_p_span= document.createElement("span");
    console.log(mensaje.datetime);
    first_p_span.innerText=" " + moment(mensaje.datetime).format('DD/MM/YYYY') + " " +moment(mensaje.datetime).format('h:mm A');
    
    const second_p= document.createElement("p");
    second_p.innerText=mensaje.message;
    
    first_p.appendChild(first_p_span);
    msg.appendChild(first_p);
    msg.appendChild(second_p);
    
    circleLinesGroup.appendChild(circleLinesGroup_img);
    firstline.appendChild(circleLinesGroup);
    firstline.appendChild(msg);
    
    linesGroup.appendChild(firstline);
    chat.appendChild(linesGroup);
}

function writeLine(mensaje){
    console.log(chat);
    console.log(chat.lastChild);
    const lastLineGroup = chat.lastChild;

    const line = document.createElement("div");
    line.classList.add("line");
    
    const time = document.createElement("div");
    time.classList.add("time");
    const time_p = document.createElement("p");
    time_p.innerText = moment(mensaje.datetime).format('h:mm A');

    const msg = document.createElement("div");
    msg.classList.add("msg");
    const msg_p = document.createElement("p");
    msg_p.innerText = mensaje.message;
    
    time.appendChild(time_p);
    msg.appendChild(msg_p);

    line.append(time,msg);
    
    lastLineGroup.appendChild(line);

}

