import { THEME_TYPES } from "../constants/theme.js";

// for tailwind css, need the change the root
export const applyTheme = (theme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES; //Extraemos los temas declaradas en index.js
  const root = window.document.documentElement; //Obtenemos root de index.html
  const isDark = theme === THEME_DARK; //Creamos una variable para capturar el estilo dark
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK); //Operacion ternaria para definir el estilo
  root.classList.add(theme); //Añadimos la clase al root
};