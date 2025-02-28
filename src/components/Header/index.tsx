import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  
  return (
    <header className="py-4 md:py-6">
      <div className="flex justify-between items-center container">
        <Navbar />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
