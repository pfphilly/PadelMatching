





const nameEntry = document.getElementById("name").value;
const dateEntry = document.getElementById("date").value;
const timeEntry = document.getElementById("time").value;
const skillEntry = document.getElementById("skill_level").value;
const partnerEntry = document.getElementById("looking_for_partner").value;
const phoneEntry = document.getElementById("phone_number").value;
const submit = document.getElementById("submit");

function submitDetails(){
    alert(nameEntry + timeEntry + dateEntry + skillEntry + partnerEntry + skillEntry)
    if (nameEntry == null /*|| dateEntry == null || timeEntry == null || phoneEntry == null || skillEntry == null*/  ){
        alert("submitted");
    }else{
        alert("Please Fill Out All Fields");
    }
}