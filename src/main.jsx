import React from 'react'
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App.jsx'
import './index.css'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  {/* <React.StrictMode> */}
      <App />
  {/* </React.StrictMode> */}
  </QueryClientProvider>,
)
