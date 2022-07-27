import { useState } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export const Login = ({onAuth}) => {
    const [username, setUsername] = useState("")
    const [pword, setPword] = useState("")

    const onSubmit = () => {
        onAuth({
            email: username,
            password: pword
        })
    }
    return (
        <Form className="login">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control  onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPword(e.target.value)} value={pword} type="password"/>
            </Form.Group>
            <Button onClick={onSubmit} type='submit'>Log in!</Button>
        </Form>
    )
}