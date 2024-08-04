import create from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "../constants/theme.js";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;
const toggleTheme = (currentTheme) =>
  currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
            theme: toggleTheme(state.getState().theme), 
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;