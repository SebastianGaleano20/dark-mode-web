export default function App() {
  return(
    <main className="h-screen bg-white dark:bg-black flex items-center justify-center">
   <section className="shadow-xl flex flex-col space-y-6 items-center justify-center p-16 dark:bg-gray-900">
     <span className="dark:text-white text-black font-bold text-xl">
      Dark mode.
     </span>
     <button
       type="button"
       className="p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold"
     >
        Dark Side
     </button>
   </section>
 </main>
);}
