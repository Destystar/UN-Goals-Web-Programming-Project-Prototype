const filePath = "Data/index.json"

const titleElement = document.querySelector("title")
const headerElement = document.querySelector("#header")
const groupInfoElement = document.querySelector("#Group_info")
const summaryElement = document.querySelector("#Summary")

document.addEventListener("DOMContentLoaded", () => {
    fetch(filePath)
        .then(response => response.json())
        .then(responseData => {
            titleElement.innerText = responseData["title"]
            headerElement.innerText = responseData["header"]

            let header2Element = document.createElement("h3")
            header2Element.innerText = responseData["header2"]

            let memberlistElement = document.createElement("ul")
            memberlistElement.setAttribute("id", "Name_list")

            for (i of responseData["member-list"]) {
                let memberElement = document.createElement("li")
                memberElement.innerText = i
                memberlistElement.appendChild(memberElement)
            }

            let pElement = document.createElement("p")
            pElement.innerText = responseData["summary"]

            groupInfoElement.appendChild(header2Element)
            groupInfoElement.appendChild(memberlistElement)
            summaryElement.appendChild(pElement)
        })
})
