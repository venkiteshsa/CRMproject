function Verify() {
    var userRef = "SuperBob";
    var passRef = "12RobotoLove";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef && pass == passRef) {
      alert("Connexion")
      return true
    } else {
      alert("It's seem you make a mistake...")
      return false
    }
  };