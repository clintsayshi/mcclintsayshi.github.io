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
      <section className={`container ${styles.contact}`}>
        <div className="sectionHeader">
          <h3 className="headerText">
            Get in <span className="blackText">t</span>ouch
          </h3>
          <div className="line"></div>
        </div>
        <div className={styles.contactContent}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus
            delectus accusamus exercitationem quo, porro, vero magnam rerum
            debitis corporis maiores! Eum laborum exercitationem tempora.
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
