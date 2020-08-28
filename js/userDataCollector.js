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
    
    var password = null;
    if(userPos != "Admin") {
        $.ajax({
            type: "GET",
            url: userUrl,
            success: function(data) {
                userName = data[0].name;
                // fname = data[0].fname;
                // gname = data[0].gname;
                password = data[0].password;
                cnumber = data[0].cnumber;
                // lnumber = data[0].lnumber;
                email = data[0].email;
                status = data[0].status;
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

    $("#submit-btn").click(function() {
        fname = $("#fname").val();
        gname = $("#gname").val();
        lnumber = $("#lnumber").val();
        ldnumber = $("#ldnumber").val();
        address = $("#address").val();
        var d = new Date();
        var reqId = d.getFullYear()+d.getMonth()+d.getHours()+d.getSeconds()+d.getMinutes()+"00"+userId; 
        var userData = {
            "fname" : fname,
            "gname" : gname,
            "lnumber" : lnumber,
            "ldnumber" : ldnumber,
            "address" : address,
            "reqId" : reqId
        }
        $.ajax({
            url: "https://db-care9-com.herokuapp.com/regData/"+userId,
            headers: {  'Access-Control-Allow-Method': 'PATCH' },
            type: 'PATCH',
            data: JSON.stringify(userData),
            contentType : "application/json",
            success : function(data) {
                alert("Your request ID is: "+reqId);
                window.location.replace("userReqTrack.html");
            },
            error : function(e) {
                console.log(e);
            }
        });
    });
    $.ajax({
        type: "GET",
        url: userUrl,
        success: function(data) {
            $('#reqTrack').append('<tr><td>'+data[0].reqId+'</td><td>'+data[0].name+'</td><td>'+data[0].email+'</td><td>'+data[0].cnumber+'</td><td>'+data[0].ldnumber+'</td><td>'+data[0].status+'</td></tr>');
        } 
    });
})    