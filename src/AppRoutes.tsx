import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import CartPage from './pages/Cart/CartPage'

const AppRoutes: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<>
				<Route path='/' element={<HomePage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='*' element={<h1>error</h1>} />
			</>
		</Routes>
	)
}

export default AppRoutes
