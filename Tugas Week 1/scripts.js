const getElement=(identifier="")=>document.querySelector(identifier);

function addTask(){
    let name = getElement("#name").value;
    let subject =  getElement("#subject").value;
    let message = getElement("#message").value;

    if (name && subject && message){
        alert("Filled Successfully")
    }

    if(!name && !subject && !message) {
        alert("Please fill the form completely");
        return;
    }
    const emailBody = `Nama: ${name}\nSubjek: ${subject}\nPesan:\n${message}`;
    window.location.href = `mailto:dimas.ahmad41@office.ui.ac.id?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
}

getElement("#submit").addEventListener("click", addTask)



