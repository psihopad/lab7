var data = [];
var nam = 1;
add.addEventListener("click", function() {
    nam += 1;
    let y = document.getElementsByTagName("input");
    for (var i = 0; i < y.length; i++) {
        data[i] = y[i].value;
    }

    // var node = '<div class="row my_row"><div class="card-panel teal lighten-2"><h4>Form ' + nam + '</h4></div> <div class="input-field col s6"> <i class="material-icons prefix">account_circle</i> <input id="icon_prefix' + nam + '" type="text" class="validate"> <label for="icon_prefix' + nam + '">Name</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">email</i> <input id="email' + nam + '" type="email" class="validate"> <label for="email' + nam + '">Email</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">phone</i> <input id="icon_telephone' + nam + '" type="tel" class="validate"> <label for="icon_telephone' + nam + '">Telephone</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">lock_open</i> <input id="password' + nam + '" type="password" class="validate"> <label for="password' + nam + '">Password</label> </div>   </div>';
    // var node = '<div class="row my_row"><div class="card-panel teal lighten-2"><h4>Form ' + nam + '</h4></div> <div class="input-field col s6"> <i class="material-icons prefix">account_circle</i> <input id="icon_prefix' + nam + '" type="text" class="validate"> <label for="icon_prefix' + nam + '">Name</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">email</i> <input id="email' + nam + '" type="email" class="validate"> <label for="email' + nam + '">Email</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">phone</i> <input id="icon_telephone' + nam + '" type="tel" class="validate"> <label for="icon_telephone' + nam + '">Telephone</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">lock_open</i> <input id="password' + nam + '" type="password" class="validate"> <label for="password' + nam + '">Password</label> </div> <div class="file-field input-field col s12"> <div class="btn"> <span>File</span> <input type="file"> </div> <div class="file-path-wrapper"> <input class="file-path validate" type="text"> </div> </div> </div>';
    var node = '<div class="wrap"><h1>Form'+ " "+ nam +'</h1><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span><input id="email" type="text" class="form-control" name="email" placeholder="Email"></div><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span><input id="password" type="password" class="form-control" name="password" placeholder="Password"></div><div class="input-group"><span class="input-group-addon">Text</span><input id="msg" type="text" class="form-control" name="msg" placeholder="Additional Info"></div></div>'
    document.getElementsByClassName("wrap")[0].innerHTML = document.getElementsByClassName("wrap")[0].innerHTML + node;

    for (var i = 0; i < y.length; i++) {
        if (data[i] != undefined) {
            y[i].value = data[i];
        } else {
            y[i].value = '';
        }
    }

})

del.addEventListener("click", function() {

    var node = document.getElementsByClassName("wrap")[nam - 1];
    if (node != undefined) {
        document.getElementsByClassName("wrap")[0].removeChild(node);
        nam -= 1;
        data = data.slice(4);

    }

})

clear.addEventListener("click", function() {
    let y = document.getElementsByTagName("input");
    data = [];
    for (var i = 0; i < y.length; i++) {
        y[i].value = '';

    }
})