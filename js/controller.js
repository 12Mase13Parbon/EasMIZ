$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var cnumber = $("#cnumber").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        var stream = $("#stream").val();
        var status = "Pending";
        var position = "Non Admin";
        var reqId = null;
        if(password == cpassword) {
            var data = {
                "name" : name,
                "email" : email,
                "cnumber" : cnumber,
                "password" : password,
                "stream" : stream,
                "status" : status,
                "position" : position,
                "reqId" : reqId
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
                                localStorage.setItem("userPos",data[c].position);
                                localStorage.setItem("reqId",data[c].reqId);
                            }
                            x++;
                        }
                    }
                    if(x == 0) {
                        alert("Please provide a valid email and Password");
                    }
                    else {
                        if(localStorage.getItem("userPos") == "Admin") { 
                            window.location.replace("../UI/admin/adminIndex.html");
                            console.log(localStorage.getItem("userPos"));
                        }
                        else {
                            if(localStorage.getItem("reqId") == "") {
                                window.location.replace("../UI/user/profile.html");
                            }
                            else {
                                window.location.replace("../UI/user/userReqTrack.html");
                                console.log(localStorage.getItem("reqId"));
                            }
                        }
                    }
                }, 
            error: function(jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.status);
                },
           dataType: "jsonp"
        });
    });
});



