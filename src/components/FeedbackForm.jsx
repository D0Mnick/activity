import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"


function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message  , setMessage] = useState('')
    
    // validation button
    const handleTextChange  = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage ('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback)

            setText('')
        }
    }
 

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect selects={(rating) => setRating(rating)}/>
            {/* @todo - rating select component */}
            <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder="Write a review" 
                value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {/* mesage to display */}
            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm
