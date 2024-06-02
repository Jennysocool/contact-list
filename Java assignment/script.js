function validateForm(){
  var name = document.getElementById("name").value; 
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;

  if(name == ""){
    alert("Name is required!");
    return false;
  }
  if(tel == ""){
    alert("Phone is required!");
    return false;
  }
  if(email == ""){
    alert("Email is required");
    return false;
  }
  return true;
}
  function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
      peopleList= [];
    }
    else{
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";
  
    peopleList.forEach(function (element, index){
      html += "<tr>";
      html += "<td>" + element.name + "</td>";
      html += "<td>" + element.tel + "</td>";
      html += "<td>" + element.email + "</td>";
      html += 
      '<td><button onclick="deleteData('+
      index +
      ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
      index +
      ')" class=btn btn-warning m-2">Edit</button></td>';
      html +="</tr>";
      });
      document.querySelector("#crudTable tbody").innerHTML 
      = html;
    } 
       
document.onload = showData();
    
function AddData(){
  if(validateForm() == true){
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;

    var peopleList;
    if(localStorage.getItem("peopleList") == null){
      peopleList= [];
    }else {
      peopleList = JSON.parse(localStorage.getItem
        ("peopleList"));
    }

    peopleList.push({
    name: name,
    tel: tel,
    email: email,
    });

    localStorage.setItem("peopleList", JSON.stringify
      (peopleList));
      showData();
      document.getElementById("name").value = "";
      document.getElementById("tel").value = "";
      document.getElementById("email").value = "";
  }
}

function deleteData(index){
    var peopleList;
    if (localStorage.getItem("peopleList") == null){
        peopleList = [];
    }else{
        peopleList = JSON.parse(localStorage.getItem
        ("peopleList"));
    }
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify
    (peopleList));
    showData();    
}

function updateData(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }else {
        peopleList = JSON.parse(localStorage.getItem
            ("peopleList"));
    }
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("tel").value = peopleList[index].tel;
    document.getElementById("email").value = peopleList[index].email;

    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){ 
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].tel = document.getElementById("tel").value;
            peopleList[index].email = document.getElementById("email").value;

            localStorage.setItem("peopleList", JSON.stringify
            (peopleList));

            showData();
            document.getElementById("name").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("email").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }

    }
}

