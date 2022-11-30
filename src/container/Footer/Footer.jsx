import { useState } from "react"
import { images } from "../../constants"
import { AppWrap, MotionWrap } from "../../wrapper"
import { client } from "../../client"
import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)

      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 2000)
    })
  }
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jorgelmtz93@gmail.com" className="p-text">
            jorgelmtz93@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+523323773263" className="p-text">
            +52 33 2377 3263
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChangeInput}
              cols="30"
              rows="10"
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
)
