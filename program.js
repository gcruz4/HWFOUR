// XMLHttpRequest

let request1 = new XMLHttpRequest();
request1.addEventListener("load", reqListener)
request1.open("GET", "https://jsonplaceholder.typicode.com/users")
request1.responseType = "json";
request1.send();

function reqListener() {
    let response1 = request1.response;
    findEmail(response1)
}

function findEmail(text) {
    emailList = new Array();
    for (var i = 0; i < 10; i++) {
        emailList.push("<br>" + text[i].email)
    }
    emailList.sort();
    document.getElementById("result1").innerHTML = emailList;
}

// fetch Method

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((response2) => {
        let userNameList = [];

        response2.forEach(function (user) {
            userNameList.push("<br>" + user.username)
            userNameList.sort(function (user1, user2) {
                return user1.length - user2.length;
            });
            document.getElementById("result2").innerHTML = userNameList;
        });
    });