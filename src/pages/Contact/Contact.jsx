import { useState } from 'react'

//CSS
import styles from './Contact.module.css'



const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")
    setSuccess("")

    const messageData = {
      name,
      email,
      message
    }

    console.log(messageData)

    if (message.length < 15) {
      setError("The message should be longer!")
    } else {
      setSuccess("The message !")
    }
  }
  return (
    <div className={styles.container}>

      <div className={styles.contact_page}>
        <div className={styles.contact_data}>
          <h1>Contact Us</h1>
          <p><b>Numer phone: </b>+5959 XXX XXX</p>
          <p>
            456 Baker Street
            London, NW1 6XE<br></br>
            United Kingdom</p>

        </div>
        <form onSubmit={handleSubmit} className={styles.contact_form}>
          <h1>Send a mail</h1>
          <label>
            <input type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </label>
          <label>
            <input type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label>
            <textarea id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message" rows="10"
              required >
            </textarea>
          </label>
          <button className='btn'>Send</button>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}

        </form>
      </div>
    </div>

  )
}

export default Contact