let orders = JSON.parse(localStorage.getItem("order")) || [];

const uimaker=(orders)=> {
    document.getElementById("tablebody").innerHTML = ''; 
  
      orders.map((ele)=>{

        let td1=document.createElement("td")
        td1.innerHTML=ele.ids

        let td2=document.createElement("td")
        td2.innerHTML=ele.sku

        let td3=document.createElement("td")
        td3.innerHTML=ele.now

        let td4=document.createElement("td")
        td4.innerHTML=ele.total

        let td5=document.createElement("td")
        td5.innerHTML=ele.quantity

        let td6=document.createElement("td")
        td6.innerHTML=ele.status

        let td7=document.createElement("td")
        td7.innerHTML=ele.payment

    let tr=document.createElement("tr")
    tr.append(td1,td2,td3,td4,td5,td6,td7)

    document.getElementById("tablebody").append(tr)

   })
}

uimaker(orders)

let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

if (userdata.length > 0 && userdata[0].name && userdata[0].surname) {
let personal= `
        <h4>Full name : ${userdata[0].name} ${userdata[0].surname}</h4>
        <h4>Contact Number : ${userdata[0].number}</h4>
        <p>Email : ${userdata[0].email}</p>
        <p>Home Number : ${userdata[0].homenumber}</p>
        <p>Society Name : ${userdata[0].societyname}</p>
        <p>Street Name : ${userdata[0].streetname}</p>
        <p>Landmark : ${userdata[0].landmark}</p>
        <p>City : ${userdata[0].cityname}</p>
        <p>State : ${userdata[0].statename}</p>
        <p>Pincode : ${userdata[0].pincode}</p>
        <button  onclick="changepersonal()">Change Detail</button>`    
    ;
  document.getElementById("showpersonal").innerHTML = personal;
} else {
  document.getElementById("showpersonal").innerHTML = "<p>No personal details available.</p>";
}

const changepersonal=()=>{
    // document.getElementById("showpersonal").style.display="none"
    document.getElementById("profileForm").style.display="block"
}

let getvalue=(id)=>{
    return document.getElementById(id).value
}

document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let name = getvalue("name");
    let surname = getvalue("surname");
    let number = getvalue("number");
    let email = getvalue("email");
    let homenumber = getvalue("homenumber");
    let societyname = getvalue("societyname");
    let streetname = getvalue("streetname");
    let landmark = getvalue("landmark");
    let cityname = getvalue("cityname");
    let statename = getvalue("statename");
    let pincode = getvalue("pincode");

    let personaldata = `
        <h4>Full name : ${name} ${surname}</h4>
        <h4>Contact Number : ${number}</h4>
        <p>Email : ${email}</p>
        <p>Home Number : ${homenumber}</p>
        <p>Society Name : ${societyname}</p>
        <p>Street Name : ${streetname}</p>
        <p>Landmark : ${landmark}</p>
        <p>City : ${cityname}</p>
        <p>State : ${statename}</p>
        <p>Pincode : ${pincode}</p>
        <button  onclick="changepersonal()">Change Detail</button>`;

    document.getElementById("showpersonal").innerHTML = personaldata;

    let information = JSON.parse(localStorage.getItem("userdata")) || [];

    let info = {
        name: name,
        surname: surname,
        number: number,
        email: email,
        homenumber: homenumber,
        societyname: societyname,
        streetname: streetname,
        landmark: landmark,
        cityname: cityname,
        statename: statename,
        pincode: pincode
    };

    information.push(info) 
    localStorage.setItem("userdata", JSON.stringify(information));
     document.getElementById("profileForm").style.display="none"
});