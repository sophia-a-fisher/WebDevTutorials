const user = {
    first_name: "Sophia",
    last_name: "Fisher",
    skills: {
        html: "95%",
        css: "95%",
        javascript:"100%"
    }
}

const {first_name,skills,last_name} = user;
const {css, html, javascript} = skills;

console.log(first_name);
console.log(last_name);
console.log(css);
console.log(html);
console.log(javascript);