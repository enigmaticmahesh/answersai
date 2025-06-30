import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from "./pages/dashboard/dashboard.page"
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App
