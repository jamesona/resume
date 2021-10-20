"use-strict"
export function DateRange({ start, end }) {
    return `
      ${new Date(start).toLocaleDateString(navigator.language)}
      &nbsp;&ndash;&nbsp;
      ${end ? new Date(end).toLocaleDateString(navigator.language) : "Present"}
    `
}
