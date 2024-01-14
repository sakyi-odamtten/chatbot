const hello = ['hello', 'hi', 'hey', 'can you help me?'];
const other = ['how are you?','how are you', 'xup' ,'how are things'];
const buy = ['good bye', 'thank you', 'thanks', 'good night', 'bye'];
function human(){
    const image1 =document.getElementById('img2');
    image1.src= "Avatars (1).png";
    const textchange = document.getElementById('spanhead');
    textchange.innerHTML= "Hannah"
}
function chatresponse(message){
    if (hello.includes(message)) return 'Hi there how may I help you?';
    else if (other.includes(message)) return 'I am doing well, What about you?';
    else if (message === 'let me talk to someone' || message === 'i want to speak with a human'){
        human();
        return `Hi there! I am Hannah. \n How may i help you?` 
    }
    else if (buy.includes(message)) return 'Glad to be of help. You can contact me if you need any help';
    else return 'You can checkout the FAQ section for further help';
}

function messagereciever (){
    // recieves the message  and display it.
  const messageInput = document.getElementById("inputbox");
  const message = messageInput.value;
  displayuser(message);
  dischatbot(message);
  messageInput.value = "";
}

function displayuser(message) {
    const tag = document.getElementById("messagesection");
    const childtag = document.createElement("div");
    childtag.id = "usermessage";
    childtag.innerHTML = `<span id="userspan"> ${message} </span>`;
    tag.appendChild(childtag);
}

function dischatbot(message){
    //convert the message to lower
    const response = chatresponse(message.toLowerCase());
    const tag = document.getElementById("messagesection");
    const childtag = document.createElement("div");
    childtag.id = "botmessage";
    childtag.innerHTML = `<span id="botspan"> ${response} </span>`;
    tag.appendChild(childtag);
}

//if user press enter
let validate = document.getElementById("inputbox");
validate.addEventListener("keydown", function(e){
    
    if(e.key === "Enter") messagereciever();
})