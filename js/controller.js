$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        // var fname = $("#fname").val();
        // var gname = $("#gname").val();
        var cnumber = $("#cnumber").val();
        // var lnumber = $("#lnumber").val();
        var email = $("#email").val();
        //var ldnumber = $("#ldnumber").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        // var address = $("#address").val();
        // var classes = $("#classes").val();
        // var section = $("#section").val();
        // var ses = $("#ses").val();
        var stream = $("#stream").val();
        if(password == cpassword) {
            // var data = {
            //     "name" : name,
            //     "fname" : fname,
            //     "gname" : gname,
            //     "cnumber" : cnumber,
            //     "lnumber" : lnumber,
            //     "email" : email,
            //     "ldnumber" : ldnumber,
            //     "password" : password,
            //     "address" : address,
            //     "classes" : classes,
            //     "section" : section,
            //     "ses" : ses
            // }
            var data = {
                "name" : name,
                "email" : email,
                "cnumber" : cnumber,
                "password" : password,
                "stream" : stream
            }

            $.ajax({
                type : "post",
                url : "https://db-care9-com.herokuapp.com/regData",
                dataType: "text",
                data : data,
                success : function(student) {
                    var stuData = JSON.parse(student)
                    console.log("Welcome" + stuData.name);
                }   
            });
        }
        else {
            alert("Please confirm the password");
        }
        alert("hello");
    });

    $("#loginBtn").click(function() {
        var loginEmail = $("#loginEmail").val();
        var loginPassword = $("#loginPassword").val();
        $.ajax({
            type:"GET", 
            url: "https://db-care9-com.herokuapp.com/regData", 
            success: function(data) {
                    //var data = JSON.stringify(data);
                    var x = 0;
                    console.log(data);
                    for(var c=0;c<data.length;c++) {
                        if(loginEmail == data[c].email && loginPassword == data[c].password) {
                            if(typeof(Storage) != "undefined") {
                                localStorage.setItem("userId",data[c].id);
                            }
                            // alert(localStorage.getItem("userId"));
                            x++;
                        }
                    }
                    if(x == 0) {
                        alert("Please provide a valid email and Password");
                    }
                    else {
                        window.location.replace("../UI/user/profile.html");
                    }
                }, 
            error: function(jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.status);
                },
           dataType: "jsonp"
        });
    });
});

//user profile-----------------

var userId = localStorage.getItem("userId");
var userUrl = "https://db-care9-com.herokuapp.com/regData?id="+userId;
var userName = null;
var fname = null;
var gname = null;
var cnumber = null;
var lnumber = null;
var email = null;
var ldnumber = null;
var address = null;
var classes = null;
var section = null;
var ses = null; 
var stream = null;
$.ajax({
    type: "GET",
    url: userUrl,
    success: function(data) {
        userName = data[0].name;
        // fname = data[0].fname;
        // gname = data[0].gname;
        cnumber = data[0].cnumber;
        // lnumber = data[0].lnumber;
        email = data[0].email;
        // ldnumber = data[0].ldnumber;
        // address = data[0].address;
        // classes = data[0].classes;
        // section = data[0].section;
        // ses = data[0].ses;
        stream = data[0].stream;
        $("#userName").html(userName);  
        $("#userEmail").html("&nbsp;&nbsp;"+email);
        // $("#userAddress").html("&nbsp;&nbsp;"+address);
        $("#userNumber").html("&nbsp;&nbsp;"+cnumber);
        $("#userSession").html("&nbsp;&nbsp;"+stream);
    }
});


