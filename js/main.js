"use-strict"
import { Bio } from "./components/bio.js"
import { Contact } from "./components/contact.js"
import { Education } from "./components/education.js"
import { Experience } from "./components/experience.js"
import { Section } from "./components/section.js"
;(async () => {
    const load = async () => {
        const request = fetch(
            "https://raw.githubusercontent.com/jamesona/Resume/master/resume.json"
        ).then((response) => {
            const body = response.json()
            if (!response.status === 200) {
                throw Error(response.status + body)
            }

            return body
        })
        return request
    }

    const populate = (template, data) => {
        const sections = Object.keys(template).map((sectionName) =>
            Section(sectionName, template[sectionName](data))
        )

        document.body.innerHTML = sections.join("\n")
    }

    populate({ Bio, Contact, Education, Experience }, await load())
})()
