import React from 'react';
import { combineStoreComponents } from 'utils/combineStoreProviders';

// import { combineStoreComponents } from '../utils/combineStoreProviders';

import {EventProvider} from './eventStore';


const providers = [
  
  EventProvider,

]
export const AppContextProvider = combineStoreComponents(...providers);