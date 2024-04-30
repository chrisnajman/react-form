import PropTypes from "prop-types"

function Content({
  nameFirst,
  nameLast,
  emailAddress,
  commentsText,
  friendly,
  employmentStatus,
  favouriteColour,
}) {
  return (
    <>
      <li>
        First name: <span>{nameFirst}</span>
      </li>
      <li>
        Last name: <span>{nameLast}</span>
      </li>
      <li>
        Email: <span>{emailAddress}</span>
      </li>
      <li>
        Comments: <span>{commentsText}</span>
      </li>
      <li>
        Is Friendly: <span>{friendly}</span>
      </li>
      <li>
        Employment status: <span>{employmentStatus}</span>
      </li>
      <li>
        Favourite colour: <span>{favouriteColour}</span>
      </li>
    </>
  )
}

Content.propTypes = {
  nameFirst: PropTypes.string,
  nameLast: PropTypes.string,
  emailAddress: PropTypes.string,
  commentsText: PropTypes.string,
  friendly: PropTypes.string,
  employmentStatus: PropTypes.string,
  favouriteColour: PropTypes.string,
}

export default Content
