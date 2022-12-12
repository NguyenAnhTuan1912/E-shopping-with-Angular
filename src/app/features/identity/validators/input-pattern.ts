const input_pattern = {
    usernamePattern: /(^[a-zA-Z_]{3}[a-zA-Z_.]+[a-zA-Z0-9_]+$)|(^[a-zA-Z_]{3}[a-zA-Z_.]+[0-9]+$)/,
    emailPattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    alternamePattern: /(^([a-zA-Z]+\s){1,}[a-zA-Z]+$)|(^[a-zA-Z]+$)/
}

export default input_pattern;