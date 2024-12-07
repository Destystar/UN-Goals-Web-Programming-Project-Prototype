const filePath = "Data/team.json"

const titleElement = document.querySelector("title")
const headerElement = document.querySelector("#header")
const mainElement = document.querySelector("#Main")

document.addEventListener("DOMContentLoaded", () => {
    fetch(filePath)
        .then(response => response.json())
        .then(responseData => {
            titleElement.innerText = responseData["title"]
            headerElement.innerText = responseData["header"]

            let memberList = []

            for (member of responseData["members"]) {
                let memberDiv = document.createElement("div")
                memberDiv.setAttribute("class", "Member")


                let memberName = document.createElement("h2")
                memberName.setAttribute("class", "Member_name")
                memberName.innerText = member["name"]

                let memberBio = document.createElement("p")
                memberBio.setAttribute("class", "Member_bio")
                memberBio.innerText = member["bio"]

                let memberRole = document.createElement("h4")
                memberRole.setAttribute("class", "Role")
                memberRole.innerText = member["role"]


                let responsibilitiesDiv = document.createElement("div")
                responsibilitiesDiv.setAttribute("class", "Responsibilities")

                let responsibilitiesTitle = document.createElement("p")
                responsibilitiesTitle.setAttribute("class", "List_title")
                responsibilitiesTitle.innerText = "Responsibilities:"

                let responsibilitiesList = document.createElement("ul")
                responsibilitiesList.setAttribute("class", "Responsibilities_list")

                for (i of member["responsibilities"]) {
                    let responsibility = document.createElement("li")
                    responsibility.innerText = i
                    responsibilitiesList.appendChild(responsibility)
                }

                responsibilitiesDiv.appendChild(responsibilitiesTitle)
                responsibilitiesDiv.appendChild(responsibilitiesList)


                let contributionsDiv = document.createElement("div")
                contributionsDiv.setAttribute("class", "Contributions")

                let contributionsTitle = document.createElement("p")
                contributionsTitle.setAttribute("class", "List_title")
                contributionsTitle.innerText = "Contributions:"

                let contributionsList = document.createElement("ul")
                contributionsList.setAttribute("class", "Contributions_list")

                for (i of member["contributions"]) {
                    let contribution = document.createElement("li")
                    contribution.innerText = i
                    contributionsList.appendChild(contribution)
                }

                contributionsDiv.appendChild(contributionsTitle)
                contributionsDiv.appendChild(contributionsList)


                memberDiv.appendChild(memberName)
                memberDiv.appendChild(memberBio)
                memberDiv.appendChild(memberRole)
                memberDiv.appendChild(responsibilitiesDiv)
                memberDiv.appendChild(contributionsDiv)

                memberList.push(memberDiv)
            }

            let memberGroup1 = document.createElement("div")
            memberGroup1.setAttribute("class", "Member_group")

            memberGroup1.appendChild(memberList[0])
            memberGroup1.appendChild(memberList[1])

            let memberGroup2 = document.createElement("div")
            memberGroup2.setAttribute("class", "Member_group")

            memberGroup2.appendChild(memberList[2])
            memberGroup2.appendChild(memberList[3])

            mainElement.appendChild(memberGroup1)
            mainElement.appendChild(memberGroup2)
        })
})
