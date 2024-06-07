import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TranslationContextProvider from "./contexts/TranslationContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TranslationContextProvider>
        <App />
      </TranslationContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
