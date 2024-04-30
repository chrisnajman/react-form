import PropTypes from "prop-types"

import { useId } from "react"

function Form({
  changeHandler,
  submitForm,
  isSubmitted,
  checkedFullTime,
  checkedIsFriendly,
  checkedPartTime,
  checkedUnemployed,
  nameComments,
  nameEmail,
  nameEmployment,
  nameFavColour,
  nameFirstName,
  nameIsFriendly,
  nameLastName,
  typeCheckbox,
  typeEmail,
  typeRadio,
  typeText,
  valComments,
  valEmail,
  valFirstName,
  valLastName,
  valPartTime,
  valUnemployed,
  valFullTime,
  valFavColour,
}) {
  const id = useId()
  return (
    <form
      onSubmit={submitForm}
      className="form"
    >
      <p>
        <span className="required">&#x2a;</span> denotes required field
      </p>
      <div>
        <label htmlFor={id + "-firstName"}>
          First Name <span className="required">&#x2a;</span>
        </label>
        <input
          type={typeText}
          onChange={changeHandler}
          name={nameFirstName}
          value={valFirstName}
          id={id + "-firstName"}
          required
          disabled={isSubmitted}
        />
      </div>

      <div>
        <label htmlFor={id + "-lastName"}>
          Last Name <span className="required">&#x2a;</span>
        </label>
        <input
          type={typeText}
          onChange={changeHandler}
          name={nameLastName}
          value={valLastName}
          id={id + "-lastName"}
          required
          disabled={isSubmitted}
        />
      </div>

      <div>
        <label htmlFor={id + "-email"}>
          Email <span className="required">&#x2a;</span>
        </label>
        <input
          type={typeEmail}
          onChange={changeHandler}
          name={nameEmail}
          value={valEmail}
          id={id + "-email"}
          required
          disabled={isSubmitted}
        />
      </div>

      <div>
        <label htmlFor={id + "-comments"}>Comments</label>
        <textarea
          value={valComments}
          onChange={changeHandler}
          name={nameComments}
          id={id + "-comments"}
          disabled={isSubmitted}
        />
      </div>

      <div className="checkbox">
        <input
          type={typeCheckbox}
          id={id + "-isFriendly"}
          checked={checkedIsFriendly}
          onChange={changeHandler}
          name={nameIsFriendly}
          disabled={isSubmitted}
        />
        <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
      </div>

      <fieldset className="radios">
        <legend>
          Current employment status <span className="required">&#x2a;</span>
        </legend>
        <div>
          <input
            type={typeRadio}
            id={id + "-unemployed"}
            name={nameEmployment}
            value={valUnemployed}
            checked={checkedUnemployed}
            onChange={changeHandler}
            required
            disabled={isSubmitted}
          />
          <label htmlFor={id + "-unemployed"}>Unemployed</label>
        </div>

        <div>
          <input
            type={typeRadio}
            id={id + "-part-time"}
            name={nameEmployment}
            value={valPartTime}
            checked={checkedPartTime}
            onChange={changeHandler}
            required
            disabled={isSubmitted}
          />
          <label htmlFor={id + "-part-time"}>Part-time</label>
        </div>

        <div>
          <input
            type={typeRadio}
            id={id + "-full-time"}
            name={nameEmployment}
            value={valFullTime}
            checked={checkedFullTime}
            onChange={changeHandler}
            required
            disabled={isSubmitted}
          />
          <label htmlFor={id + "-full-time"}>Full-time</label>
        </div>
      </fieldset>

      <div>
        <label htmlFor={id + "-favColor"}>What is your favorite color?</label>
        <select
          id={id + "-favColor"}
          value={valFavColour}
          onChange={changeHandler}
          name={nameFavColour}
          disabled={isSubmitted}
        >
          <option value="">Choose</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
          <option value="Not listed">Not listed</option>
        </select>
      </div>

      <button disabled={isSubmitted}>Submit</button>
    </form>
  )
}

Form.propTypes = {
  changeHandler: PropTypes.func,
  submitForm: PropTypes.func,
  isSubmitted: PropTypes.bool,
  checkedFullTime: PropTypes.bool,
  checkedIsFriendly: PropTypes.bool,
  checkedPartTime: PropTypes.bool,
  checkedUnemployed: PropTypes.bool,
  nameComments: PropTypes.string,
  nameEmail: PropTypes.string,
  nameEmployment: PropTypes.string,
  nameFavColour: PropTypes.string,
  nameFirstName: PropTypes.string,
  nameIsFriendly: PropTypes.string,
  nameLastName: PropTypes.string,
  typeCheckbox: PropTypes.string,
  typeEmail: PropTypes.string,
  typeRadio: PropTypes.string,
  typeText: PropTypes.string,
  valComments: PropTypes.string,
  valEmail: PropTypes.string,
  valFirstName: PropTypes.string,
  valLastName: PropTypes.string,
  valPartTime: PropTypes.string,
  valUnemployed: PropTypes.string,
  valFullTime: PropTypes.string,
  valFavColour: PropTypes.string,
}

export default Form
