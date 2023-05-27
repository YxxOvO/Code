// JavaScript Document
function toCheck(){
    var isbn = document.getElementById("ISBN").value;
    var s = isbn.split("-");
    var i,number = 0;
    if(s!=null){
        for (i=0;i<s.length;i++){
            number+=s[i].length;
        }
        if (number==13){
            alert("提交");
            return true;
        }
        else{
            alert("ISBN是由13位组成！");
            document.getElementById("ISBN").value="";
            document.getElementById("ISBN").focus();
            return false;
        }
    }
    else{
        if(isbn.length==13){
            alert("鎻愪氦");
            return true;
        }
        else{
            alert("ISBN是由13位组成！");
            document.getElementById("ISBN").value="";
            document.getElementById("ISBN").focus();
            return false;
        }
    }
}