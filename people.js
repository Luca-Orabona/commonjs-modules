import name from "./names.js"
import hobbies from "./hobbies.js"

const fullNameHobbies = () => {
    return {
        fullName: name("Mario", "Rossi"),
        hobbies: hobbies("calcio", "videogiochi", "lettura")
    }
}

export default fullNameHobbies;
