const getdata = async () => {
    let res = await fetch("https://node5.onrender.com/user/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    let employee = await res.json();
    
    let tbody = document.getElementById("tbody");  // Ensure tbody exists
    tbody.innerHTML = ""; // Clear old rows first

    employee.data.map((data) => {
        let tr = document.createElement("tr");  // create a new row every time

        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let passwordTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let isActiveTd = document.createElement("td");
        let actionTd = document.createElement("td");

        idTd.innerHTML = data._id;
        ageTd.innerHTML = data.age;
        nameTd.innerHTML = data.name;
        emailTd.innerHTML = data.email;
        passwordTd.innerHTML = data.password;
        isActiveTd.innerHTML = data.isActive;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.className = "btn btn-danger";
        deleteBtn.addEventListener("click", async() => {
            // alert(data._id);
            const response = await fetch("https://node5.onrender.com/user/user/" + data._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            // const res = await response.json();
            // console.log(res);
            getdata()
            
        });
        actionTd.appendChild(deleteBtn);

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(passwordTd);
        tr.appendChild(ageTd);
        tr.appendChild(isActiveTd);
        tr.appendChild(actionTd);

        tbody.appendChild(tr);
    });
};

let but = document.getElementById("but");
but.addEventListener("click", () => {
    getdata();
});
