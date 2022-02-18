import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { PasswordRecovery } from '@pages/PasswordRecovery';
import { SendEmail } from '@pages/SendEmail';
import { NewPassword } from '@pages/NewPassword';
import { MyAccount } from '@pages/MyAccount';
import { CreateAccount } from '@pages/CreateAccount';
import { Checkout } from '@pages/Checkout';
import { Orders } from '@pages/Orders';
import { NotFound } from '@pages/NotFound';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import '@styles/global.css';

function App() {
	const initialState = useInitialState(); // Se guarda lo que retorna

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter basename="/ReactShop">
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/PasswordRecovery" element={<PasswordRecovery />} />
						<Route path="/SendEmail" element={<SendEmail />} />
						<Route path="/NewPassword" element={<NewPassword />} />
						<Route path="/MyAccount" element={<MyAccount />} />
						<Route path="/CreateAccount" element={<CreateAccount />} />
						<Route path="/Checkout" element={<Checkout />} />
						<Route path="/Orders" element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export { App };
