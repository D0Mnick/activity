import { FaQuestion } from "react-icons/fa"
import { FaQrcode } from 'react-icons/fa'

import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className="about-link"> 
        <Link to='/about'>
        {/* {{
          pathname:'/about',
          search:'?sort-name',
          hash:'#hello',
        }}> */}
        <FaQrcode size={50} />
        </Link>
    </div>
  )
}
export default AboutIconLink
