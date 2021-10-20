"use-strict"

import { PartyHeader } from "./party-header.js"
import { SectionHeader } from "./section-header.js"

function Employer(employer) {
    return `
      <dl>
        <dt>${PartyHeader(employer)}</dt>
        <dt>
          <span>${employer.role}</span>
        </dt>
        <dd>
          <ul>
            ${employer.responsibilities
                .map((txt) => `<li>${txt}</li>`)
                .join("\n")}
          </ul>
        </dd>
      </dl>
    `
}

export function Experience(data) {
    return (
        SectionHeader("Experience") +
        data.experience.map((employer) => Employer(employer)).join("\n")
    )
}
