import { useEffect } from "react";
import {applyTheme} from './utils/applyTheme.js'
import useTheme from './stores/useTheme.js'


export default function App() {
  const toggleTheme = useTheme((state) => state.toggleTheme);
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return(
    <main className="h-screen bg-white dark:bg-black flex items-center justify-center">
   <section className="shadow-xl flex flex-col space-y-6 items-center justify-center p-16 dark:bg-gray-900">
     <span className="dark:text-white text-black font-bold text-xl">
      Dark mode.
     </span>
     <button
     onClick={toggleTheme}
       type="button"
       className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
     >
        Dark Side
     </button>
   </section>
 </main>
);}
