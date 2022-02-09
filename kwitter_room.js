
//ADD YOUR FIREBASE LINKS HERE
/*
const firebaseConfig = {
      apiKey: "AIzaSyAh4orVrgRmOG2JJkU3DqvvukDpVlnBsgY",
      authDomain: "test-80721.firebaseapp.com",
      databaseURL: "https://test-80721-default-rtdb.firebaseio.com",
      projectId: "test-80721",
      storageBucket: "test-80721.appspot.com",
      messagingSenderId: "884766646540",
      appId: "1:884766646540:web:4b94b19f7511d6e4742929",
      measurementId: "G-CVKJD8ZP5Z"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}*/
