const par=document.getElementById('myParagraph');
let content=par.textContent.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').sort()
let newContent=content.filter((i)=> i!=='')
let content1=newContent.map((i)=>i.toLowerCase())
// console.log(content1)
function solve(arr){
    return arr.sort((a, b) => 
     arr.filter(x => x === b).length - arr.filter(x => x === a).length || a - b
 );
}
let arr= new Set(solve(content1));
let arr1=[...arr]
console.log(arr1.slice(0,5))

let content2=par.innerHTML
let a=arr1.slice(0,5)

for(i in a){
    let temp=a[i]+" "
    content2=content2.replaceAll(temp,`<b>${temp}</b>`)
    content2=content2.replaceAll(temp[0].toUpperCase()+temp.substr(1),`<b><u>${temp[0].toUpperCase()+temp.substr(1)}</u></b>`)
}

par.innerHTML=content2
