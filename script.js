





const nameEntry = document.getElementsByClassName("name");
const dateEntry = document.getElementsByClassName("date");
const timeEntry = document.getElementsByClassName("time");
const skillEntry = document.getElementsByClassName("skill_level");
const partnerEntry = document.getElementsByClassName("looking_for_partner");
const phoneEntry = document.getElementsByClassName("phone_number");
const submit = document.getElementsByClassName("submit");

function submitDetails(){
    if (nameEntry != null && dateEntry != null && timeEntry != null && phoneEntry != null && skillEntry != null){
        alert("submitted");
    }else{
        alert("Please Fill Out All Fields");
    }
}