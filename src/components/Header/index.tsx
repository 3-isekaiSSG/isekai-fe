import AppBar from './AppBar'
import MainNav from './MainNav'

export default function Header() {
  return (
    <>
      <header className="w-full">
        <AppBar />
      </header>
      <nav>
        <MainNav />
      </nav>
    </>
  )
}
