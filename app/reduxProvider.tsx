'use client'
import { Provider } from 'react-redux';

import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return(
        <Provider store={store}>
          
            {children}
     
        </Provider>
    ) 
}