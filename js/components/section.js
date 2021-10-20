"use-strict"
export function Section(name, template) {
    return `
      <section id="${name}">
        ${template}
      </section>
    `
}
