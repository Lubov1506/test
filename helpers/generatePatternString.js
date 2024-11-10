export function generatePatternString(pattern) {
   
    return pattern.replace(/\\[a-z]/g, () => {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    });
}