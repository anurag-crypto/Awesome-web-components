var btn=[];
for(var i=1;i<4;i++)
{
    let rowBtns=[];
    for(var j=1;j<4;j++)
    {
    let currID="btn"+String((i-1)*3+j);
    let currBtn=document.getElementById(currID);
    rowBtns.push(currBtn);
    rowBtns[j-1].innerHTML=((i-1)*3+j);
    }
    btn.push(rowBtns);
}

btn[1][1].onclick=()=>{
var tempAr=[];
//storing
tempAr.push(btn[1][0].innerHTML);
for(var i=0;i<3;i++) //to right
tempAr.push(btn[0][i].innerHTML);
for(var i=1;i<3;i++) //to down
tempAr.push(btn[i][2].innerHTML);
for(var i=1;i<3;i++) //to left
tempAr.push(btn[2][3-i-1].innerHTML);
//updating
var ind=0;
for(var i=0;i<3;i++) //to right
btn[0][i].innerHTML=tempAr[ind++];
for(var i=1;i<3;i++) //to down
btn[i][2].innerHTML=tempAr[ind++];
for(var i=1;i<3;i++) //to left
btn[2][3-i-1].innerHTML=tempAr[ind++];
btn[1][0].innerHTML=tempAr[ind];
};