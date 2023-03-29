import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {
  const Styles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={Styles}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}
Header.defaultProps = {
 text: 'Feedback UI',
 bgColor: 'red',
 textColor: "#fff",
}

Header.prototypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,

}

// checking for your props proptypes

export default Header
