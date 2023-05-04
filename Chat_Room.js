// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJRKI8BR_07OTujOfnDsPnlP8Iamihbec",
  authDomain: "chatapp-2df65.firebaseapp.com",
  databaseURL: "https://chatapp-2df65-default-rtdb.firebaseio.com",
  projectId: "chatapp-2df65",
  storageBucket: "chatapp-2df65.appspot.com",
  messagingSenderId: "1760093920",
  appId: "1:1760093920:web:09712b7691e7f338cfd285",
  measurementId: "G-S6H9L6CC09"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
//add user_name
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    //Chat_Page.html
    window.location = "Chat_Page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      //output
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Chat_Page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
