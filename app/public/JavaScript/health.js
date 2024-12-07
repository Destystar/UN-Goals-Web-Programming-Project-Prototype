const filePath = "Data/health.json"

const titleElement = document.querySelector("title")
const imgSummaryElement = document.querySelector("#Img_summary")
const imgStatsElement = document.querySelector("#Img_stats")

document.addEventListener("DOMContentLoaded", () => {
    fetch(filePath)
        .then(response => response.json())
        .then(responseData => {
            titleElement.innerText = responseData["title"]

            let imgElement = document.createElement("img")
            imgElement.setAttribute("id", "SDG_logo")
            imgElement.setAttribute("src", responseData["image"])
            imgElement.setAttribute("alt", responseData["alt"])

            let summaryElement = document.createElement("p")
            summaryElement.setAttribute("id", "Summary")
            summaryElement.innerText = responseData["summary"]

            let statsElement = document.createElement("p")
            statsElement.setAttribute("id", "Stats")

            let ListElement = document.createElement("ul")
            ListElement.setAttribute("id", "List")

            statsElement.appendChild(ListElement)

            for (i of responseData["stats"]) {
                let stat = document.createElement("li")
                stat.innerText = i
                ListElement.appendChild(stat)
            }

            let img2Element = document.createElement("img")
            img2Element.setAttribute("id", "Extra")
            img2Element.setAttribute("src", responseData["image2"])
            img2Element.setAttribute("alt", responseData["alt2"])

            imgSummaryElement.appendChild(imgElement)
            imgSummaryElement.appendChild(summaryElement)
            imgStatsElement.appendChild(statsElement)
            imgStatsElement.appendChild(img2Element)
        })
})
