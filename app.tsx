import React from 'react';
import { Router } from "./Routes/Routes";
import './containers/Home/Home.css';
import AppProvider from "./containers/AppProvider/AppProvider";
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import {queryClient} from "./react-query/useQueryClientGet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthorizationProvider } from './components/Auth/AuthorizationProvider';
import './index.css';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthorizationProvider>
          <Router providers={<AppProvider />} />
          <ToastContainer
            position="bottom-center"
            theme="colored"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthorizationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
