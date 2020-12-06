import React from "react"

import "../global.scss"
import styles from "./home.module.scss"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <section id="contact" className={`container ${styles.contact}`}>
        <div className="sectionHeader">
          <h3 className="headerText">
            Say <span className="blackText">Hello</span>
          </h3>
        </div>
        <div className={styles.contactContent}>
          <p>
            Interested in working on a project together? or hiring me to be part
            of your team? drop a message below
          </p>

          <form
            className={`container ${styles.contactFields}`}
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mknpvvjd"
            method="POST"
          >
            {/*  <!-- add your custom form HTML here --> */}

            <div className={styles.contactField}>
              <input
                className={styles.contactFieldName}
                placeholder="First Name"
                name="fname"
                id="fname"
                type="text"
              />

              <input
                className={styles.contactFieldName}
                placeholder="Last Name"
                name="lname"
                id="lname"
                type="text"
              />
            </div>

            <div className={styles.contactField}>
              <input placeholder="Email" name="Email" id="email" type="email" />
            </div>

            <div className={styles.contactField}>
              <textarea
                placeholder="Message"
                rows="5"
                name="message"
                id="message"
                type="message"
              />
            </div>

            {status === "SUCCESS" ? (
              <p>Thanks!</p>
            ) : (
              <button className="btn">Send Message</button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
