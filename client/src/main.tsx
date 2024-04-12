import ReactDOM from 'react-dom/client'
import './styles/index.css';
import { createContext } from 'react';
import UserStore from './store/UserStore.ts';
import AppRouter from './components/AppRouter.tsx';
import DeviceStore from './store/DeviceStore.ts';

type contextGeneric = {
	user: UserStore, 
	device: DeviceStore,
} | null;

export const Context = createContext<contextGeneric>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Context.Provider value={{
		user: new UserStore(),
		device: new DeviceStore()
	}}>
		<AppRouter />
	</Context.Provider>
)

