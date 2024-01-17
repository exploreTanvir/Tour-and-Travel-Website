import "./form.css"

const Form = () => {
  return (
    <div className="form">
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder="name" type="text"/>
            <input placeholder="email" type="email"/>
            <input placeholder="subject" type="text"/>
            <textarea placeholder="message" rows={4}></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Form