import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Content from "./components/Content"

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-container">
      <Header />

      <main
        className="main-content"
        id="main-content"
      >
        <div className="form-container">
          <h2>Input:</h2>
          <Form
            submitForm={handleSubmit}
            changeHandler={handleChange}
            typeText="text"
            typeEmail="email"
            typeCheckbox="checkbox"
            typeRadio="radio"
            nameFirstName="firstName"
            valFirstName={formData.firstName}
            nameLastName="lastName"
            valLastName={formData.lastName}
            nameEmail="email"
            valEmail={formData.email}
            nameComments="comments"
            valComments={formData.comments}
            nameIsFriendly="isFriendly"
            checkedIsFriendly={formData.isFriendly}
            nameEmployment="employment"
            valUnemployed="unemployed"
            checkedUnemployed={formData.employment === "unemployed"}
            valPartTime="part-time"
            checkedPartTime={formData.employment === "part-time"}
            valFullTime="full-time"
            checkedFullTime={formData.employment === "full-time"}
            nameFavColour="favColor"
            valFavColour={formData.favColor}
            isSubmitted={submitted}
          />
        </div>

        <div className="content">
          <h2>Output:</h2>
          <ul>
            {submitted && (
              <Content
                nameFirst={formData.firstName}
                nameLast={formData.lastName}
                emailAddress={formData.email}
                commentsText={
                  formData.comments ? formData.comments : "No comments"
                }
                friendly={formData.isFriendly ? "True" : "False"}
                employmentStatus={formData.employment}
                favouriteColour={
                  formData.favColor ? formData.favColor : "None chosen"
                }
              />
            )}
          </ul>
          {submitted && (
            <>
              <div className="reload-page">
                <button onClick={() => window.location.reload()}>
                  Reload the page to start again
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
