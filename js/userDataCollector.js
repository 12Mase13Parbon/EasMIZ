$(document).ready(function() {
    var userId = localStorage.getItem("userId");
    var userPos = localStorage.getItem("userPos");
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
    var status = null;
    var position = null;
    if(userPos != "Admin") {
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
                status = data[0].status;
                $("#userName").html(userName.toUpperCase());  
                $("#name").val(userName.toUpperCase());  
                $("#userEmail").html("&nbsp;&nbsp;"+email);
                $("#email").val(email);
                // $("#userAddress").html("&nbsp;&nbsp;"+address);
                $("#userNumber").html("&nbsp;&nbsp;"+cnumber);
                $("#userSession").html("&nbsp;&nbsp;"+stream.toUpperCase());
            }
        });
    }
})    