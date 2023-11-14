import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider,QueryClient } from 'react-query'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './redux/store'
import { VITE_APP_AUTHO_DOMAIN, VITE_CLIENT_ID, VITE_REDIRECT_URI } from './utils/constant';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
})

const domain = VITE_APP_AUTHO_DOMAIN;
const clientId = VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain= {domain}
      clientId= {clientId}
      // redirectUri={window.location.origin}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
