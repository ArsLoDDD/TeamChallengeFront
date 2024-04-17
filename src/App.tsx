//components
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
//routing
import AppRoutes from './AppRoutes'
//styles
import './App.css'

function App() {
	return (
		<>
			<Header />
			<AppRoutes />
			<Footer />
		</>
	)
}

export default App
