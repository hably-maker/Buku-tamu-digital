import Sidebar from './components/Sidebar'
import TopNavbar from './components/TopNavbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-on-surface">
      <Sidebar />
      <main className="ml-[280px] min-h-screen flex flex-col">
        <TopNavbar />
        <Dashboard />
        <Footer />
      </main>
    </div>
  )
}

export default App
