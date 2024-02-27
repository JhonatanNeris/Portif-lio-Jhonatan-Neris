import React, {useState} from 'react'

//Css
import styles from "./Contacts.module.css"

//icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

//EmailJS
import emailjs from "@emailjs/browser";

const Contacts = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        if(!name || !email || !message){
            setError("Preencha os campos necessários")
            setLoading(false)
            return
        }

        emailjs.init({
            publicKey: "sk5ZmIBRXrJI-otY4",
          });

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }

        emailjs.send("service_d4d2s6n", "template_vzn65mp", templateParams, "sk5ZmIBRXrJI-otY4")
        .then((res) => {
            console.log("Email enviado", res.status, res.text)
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setError("")
            setLoading(false)
            alert("Enviado com sucesso!")
        }, (error) =>{
            console("Problemas na requisição", error)
            setError(error)
            setLoading(false)
        })


    }
    return (
        <div className='container'>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className='colored-text'>Entre em contato</h1>
                    <p>Tem um projeto em mente? Gotaria de trabalhar comigo? Preencha o formulário e eu entrarei em contato com você nas próximas horas.</p>
                    <div className={styles.contacts}>
                        <div>
                            <svg width="0" height="0" >
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop stopColor="#b16cea" offset="0%" />
                                    <stop stopColor="#ff5e69" offset="40%" />
                                    <stop stopColor="#ffa84b" offset="100%" />
                                </linearGradient>
                            </svg>
                            <MdEmail style={{ fill: "url(#gradient)", fontSize: "2rem" }} /><p>jhonatansnx@gmail.com</p>
                        </div>
                        <div>
                            <svg width="0" height="0" >
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop stopColor="#b16cea" offset="0%" />
                                    <stop stopColor="#ff5e69" offset="40%" />
                                    <stop stopColor="#ffa84b" offset="100%" />
                                </linearGradient>
                            </svg>
                            <FaLinkedin style={{ fill: "url(#gradient)", fontSize: "2rem" }} /><p>Linkedin</p>
                        </div>

                    </div>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Seu nome:</span>
                            <input
                                type="text"
                                placeholder='Digite seu nome'
                                
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Seu email:</span>
                            <input
                                type="text"
                                placeholder='Digite seu email'
                                
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Seu telefone:</span>
                            <input
                                type="text"
                                placeholder='Se preferir pode deixar seu telefone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Me conte sobre o que você está procurando...</span>
                            <textarea
                                type="textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>
                        {!loading && (
                            <input type="submit" value="Enviar" className='btn-color'/>

                        )}
                        {loading && (
                            <input disabled type="submit" value="Enviando..." className='btn-outline'/>

                        )}
                        
                    </form>
                    {error && (
                        <div className={styles.error}>
                        <p>{error}</p>
                    </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Contacts