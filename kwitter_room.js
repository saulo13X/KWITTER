 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAF5ZBS7GrnmnEnuorOQy7p_Sx-IJ2ZRHU",
    authDomain: "vamos-conversar-58772.firebaseapp.com",
    databaseURL: "https://vamos-conversar-58772-default-rtdb.firebaseio.com",
    projectId: "vamos-conversar-58772",
    storageBucket: "vamos-conversar-58772.appspot.com",
    messagingSenderId: "27169419901",
    appId: "1:27169419901:web:0ef23ed997babce1aef714"
  };

firebase.initializeApp  (firebaseConfig);

user_name =localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-Vindo(a)  " +  user_name  + "!"; 




function addRoom()
{
    room_name  = document.getElementById("room_name").value;
     
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });

   localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";


}




function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData();

function  redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location ="kwitter_page.html";
}

function  logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
     window.location = "index.html"
 
}