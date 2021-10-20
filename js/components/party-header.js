"use-strict"
import { DateRange } from "./date-range.js"
export function PartyHeader({ name, dates }) {
    return `
      <h3>
        <span class="organization">${name}</span>
        <span>&emsp;&mdash;&emsp;</span>
        <span class="date-range">${DateRange(dates)}</span>
      </h3>
    `
}
