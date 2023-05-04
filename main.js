function addUser(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name); 
    //add chat_room.html
    
    window.location="Chat_Room.html";
    
    }
