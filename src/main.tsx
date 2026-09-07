import {createRoot} from 'react-dom/client'
import {App} from './App'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";

axios.defaults.withCredentials = true;
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
)
