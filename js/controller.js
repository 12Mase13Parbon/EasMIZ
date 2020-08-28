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
        var status = "Not Approved";
        var position = "Non Admin";
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
                "stream" : stream,
                "status" : status,
                "position" : position
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
                            }
                            // alert(localStorage.getItem("userId"));
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
                            window.location.replace("../UI/user/profile.html");
                            console.log(localStorage.getItem("userPos"));
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



