"use-strict"
export function Contact({
    details: {
        contact: { email, phone, site, linkedin, github, irc },
    },
}) {
    return `
      ${email ? `<a href="mailto:${email}">${email}</a>` : ""}
      ${phone ? `<a href="tel:${phone}>${phone}</a>` : ""}
      ${site ? `<a href="${site}" target="_blank">${site}</a>` : ""}
      ${linkedin ? `<a href="${linkedin}" target="_blank">${linkedin}</a>` : ""}
      ${github ? `<a href="${github}" target="_blank">${github}</a>` : ""}
      ${irc ? `` : ""}
    `
}
