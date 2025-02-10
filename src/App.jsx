import Display from "./Display/Display";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <div>
        <Display />
      </div>
    </SnackbarProvider>
  );
}

export default App;