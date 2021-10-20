"use-strict"
export function Bio({ details: { name, about } }) {
    return `
      <h1 class="name">${name}</h1>
      ${about ? `<p class="background">${about}</p>` : ""}
    `
}
