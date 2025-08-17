const employees = [
    {
        id: 1,
        name: "bhavya",
        age: 25,
        salary: 1000,
        email: "bhavya@gmail.com",
        status: "active",
        url:"https://www.google.com"
    },
    {
        id: 2,
        name: "raj",
        age: 25,
        salary: 1000,
        email: "raj@gmail.com",
        status: "active"
    },
    {
        id: 3,
        name: "kajal",
        age: 25,
        salary: 1000,
        email: "kajal@gmail.com",
        status: "active"
    },
    {
        id: 4,
        name: "harsh",
        age: 25,
        salary: 1000,
        email: "harsh@gmail.com",
        status: "active"
    },
    {
        id: 5,
        name: "amit",
        age: 25,
        salary: 1000,
        email: "amit@gmail.com",
        status: "active"
    }
]

console.log(employees);


const getData = () => {
    let tbody = document.getElementById("tbody")

    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let salaryTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let statusTd = document.createElement("td")

        idTd.innerHTML = employees[i].id;
        nameTd.innerHTML = employees[i].name;
        ageTd.innerHTML = employees[i].age;
        salaryTd.innerHTML = employees[i].salary;
        emailTd.innerHTML = employees[i].email;
        statusTd.innerHTML = employees[i].status;



        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(salaryTd)
        tr.appendChild(emailTd)
        tr.appendChild(statusTd)
    }

}