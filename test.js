btntest.onclick = function(){


    let input1lnc = document.getElementById("input1").value;
    let input2lnc = document.getElementById("input2").value;



    if(input1lnc==""){
        console.log("Please Enter Something In Content 1")

    }else if(input2lnc==""){
        console.log("Please Enter Something In Content 2");
        
    };


    let answer = Number(input1lnc)+Number(input2lnc)

    if(answer==7){
        document.getElementById('tvoutput').style.visibility = "visible";
        document.getElementById('tvoutput').textContent="Thala For A Reason";
    }else{
        document.getElementById('tvoutput').style.visibility = "visible";
        document.getElementById('tvoutput').textContent="Chal BKL"
    }
}; 