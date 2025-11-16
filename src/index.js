import { add } from "../modules/math.js";
import { greeting } from "../modules/message.js";

const result = add(10, 20);
const text = `${greeting("Влад")} Результат: ${result}`;

document.getElementById("app").textContent = text;