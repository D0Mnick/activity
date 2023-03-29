import Card from "./shared/Card";
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


function FeedbackItem({item , handleDelete}) {
// const handleClick = () =>{
//   console.log(12)
// }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() =>handleDelete(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card >
      
    
  )
}

FeedbackItem.protoTypes = {
  item: PropTypes.isRequired,
}

export default FeedbackItem
