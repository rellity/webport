import { Hammer } from "lucide-react"
import { ThemeProvider } from "./components/utils/theme-provider"
import { ModeToggle } from "./components/utils/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center h-screen p-4">
        hello, this is a wip site for rell's portfolio projects
        <div className="flex flex-row gap-2">
          <Hammer /> coming soon&trade;
        </div>
      </div>
      <div className="fixed flex flex-row gap-2 bottom-0 left-0 m-4 p-2 bg-background rounded-lg">
        <ModeToggle />
      </div>

    </ThemeProvider>
  )
}

export default App
