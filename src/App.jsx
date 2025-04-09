import { useState } from 'react'
import './App.css'
import Great from './components/Great'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import JsxRules from './components/JsxRules'
import ProductInfo from './components/ProductInfo'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import FetchData from './components/FetchData'
import UserInfo from './components/UserInfo'
import { UserProvider } from './components/UserContext'
import UpdateUser from './components/UpdateUser'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      {/* <Header/> */}
      {/* <MainContent/>
      <WelcomeMessage/>
      <Great/>
      <JsxRules/> */}
      {/* <Great/> */}
      {/* <UserList/> */}
      {/* <ProductList/> */}
      {/* <Weather/> */}
      {/* <UserStatus isLoggedIn={true} isAdmin={true}/> */}
      {/* <ProductInfo name="Laptop" price={1000}/> */}
      {/* <ProductInfo/> */}
      {/* <Footer/> */}
      {/* <Counter/>  
      <TodoList/>
      <Profile/>
      <ShoppingList/> */}
      <FetchData/>
      {/* <UserInfo/> */}
      {/* <UpdateUser/> */}
      {/* <FocusInput/> */}
      {/* <Timer/> */}

      <h1>Hello World</h1>
      

    </UserProvider>
  )
}

export default App
