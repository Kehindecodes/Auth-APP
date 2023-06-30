import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/RegisterPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					{/* <Route exact path='/login' element={LoginPage} /> */}
					<Route exact path='/' element={<RegisterPage />} />
					{/* <Route exact path='/request-otp' element={RequestOTPPage} />
					<Route exact path='/otp-verification' element={OTPVerificationPage} />
					<Route exact path='/profile' element={ProfilePage} />
					<Route
						exact
						path='/profile/reset-password'
						element={ResetPasswordPage}
					/>
					<Route exact path='/forgot-password' element={ForgotPasswordPage} />
					<Route exact path='/profile/edit-profile' element={EditProfilePage} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
