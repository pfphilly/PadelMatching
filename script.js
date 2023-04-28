import { createClient } from "@supabase/supabase-js";
alert("import works");
const supabase = createClient("https://myuitfqckikmvafsxmuq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15dWl0ZnFja2lrbXZhZnN4bXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1OTc1NDMsImV4cCI6MTk5ODE3MzU0M30.dfzTQY_i_aoJc3Q5PhxyjAvQbAjrG0if1C9iqJAeyY8");
alert("const supabase works");






const nameEntry = document.getElementById("name");
const dateEntry = document.getElementById("date");
const timeEntry = document.getElementById("time");
const skillEntry = document.getElementById("skill_level");
const partnerEntry = document.getElementById("looking_for_partner");
const phoneEntry = document.getElementById("phone_number");
const submit = document.getElementById("submit");
alert("objects work")



submit.addEventListener("click", function(){submitDetails()})
alert("listener works")
async function submitDetails(){
    const { error } = await supabase
    .from('name')
    .insert({ id: 1, name: 'Peter' })
    
    alert("added");
}