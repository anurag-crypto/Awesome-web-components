var one=document.getElementById("btn1");
var zero=document.getElementById("btn0");
var clr=document.getElementById("btnClr");
var eql=document.getElementById("btnEql");
var add=document.getElementById("btnSum");
var sub=document.getElementById("btnSub");
var mul=document.getElementById("btnMul");
var div=document.getElementById("btnDiv");
var res=document.getElementById("res");
var result="";
var operand1,operand2,operator;
one.onclick=()=>{
result=result+"1";
res.innerHTML=result;
res.scrollTop = res.scrollHeight;
};
zero.onclick=()=>{
    result+="0";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
clr.onclick=()=>{
    result="";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
add.onclick=()=>{
    result+="+";
    operator="+";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
sub.onclick=()=>{
    result+="-";
    operator="-";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
mul.onclick=()=>{
    result+="*";
    operator="*";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
div.onclick=()=>{
    operator="/";
    result+="/";
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
function deciToBin(n)
{
    let ans="";
    n=Number(n);
    while(n)
    {
        if(n&1)
        {
            ans+="1";
            n=(n-1)/2;
        }
        else
        {
            ans+="0";
            n/=2;
        }
    }
    return (ans.split('').reverse().join(''));
}
eql.onclick=()=>{
    let [a,b]=result.split(operator);
    //let [a,b]=result.split(/[*-/+]/);
    operand1=a;
    operand2=b;
    result=String(parseInt(operand1,2));
    result+=operator;
    result+=String(parseInt(operand2,2));
    result=Math.floor(Number(eval(result)));
    result=deciToBin(Math.floor(Number(eval(result))));
    res.innerHTML=result;
    res.scrollTop = res.scrollHeight;
};
