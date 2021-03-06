//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyDW69wKrmOdeLWW-UsC78l6Km1m5P1pPPc",
      authDomain: "kwitter-project-cc488.firebaseapp.com",
      projectId: "kwitter-project-cc488",
      databaseURL: "https://kwitter-project-cc488-default-rtdb.firebaseio.com",
      storageBucket: "kwitter-project-cc488.appspot.com",
      messagingSenderId: "938473941852",
      appId: "1:938473941852:web:eac25813e27eece7322f99",
      measurementId: "G-RZDF8M7K98"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
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
    
*/
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0      
          });

          document.getElementById("msg").value = "";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " +message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes 
      });

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}