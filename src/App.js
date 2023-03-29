import { BrowserRouter as Router, Route, Routes , NavLink } from "react-router-dom"
import Card from "./components/shared/Card"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import { FaRainbow } from "react-icons/fa"
import { FeedbackProvider } from "./context/FeedbackContext"







function App() {
  // this is state
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
          <Router>
        <Header />
        <div className="container">

        <Card>
      
          <div className="navlinks">
            <NavLink to= '/' activeClassName='active'>
            < FaRainbow size={20} />
              Home
            </NavLink>
            <NavLink to= '/about' activeClassName='active'>
              About
            </NavLink>
            </div>
          </Card>  
          
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm handleAdd = {addFeedback}/>
                <FeedbackStats feedback={feedback} />
                {/* accss to feedbacklist */}
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/>

              </>
            }>     
            </Route>
          <Route path='/about' element={<AboutPage/>}/>
          {/* <Route path='/post/:id/:name' element={<Post/>}/> */}
          <Route path='/post/*' element={<Post/>}/>
          </Routes>

          

        </div>
        <AboutIconLink />
        </Router>

    </FeedbackProvider>
    
  )
}

export default App
