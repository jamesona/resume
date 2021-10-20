"use-strict"

import { PartyHeader } from "./party-header.js"
import { SectionHeader } from "./section-header.js"

function Educator(educator) {
    return `
      <dl>
        <dt>${PartyHeader(educator)}</dt>
        <dd>
          <p>${educator.description}</p>
        </dd>
      </dl>
    `
}

export function Education(data) {
    return (
        SectionHeader("Education") +
        data.education.map((educator) => Educator(educator)).join("\n")
    )
}
