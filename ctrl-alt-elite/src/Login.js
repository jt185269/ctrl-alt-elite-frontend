import { useState } from "react"
import { Button, Form, Input } from "semantic-ui-react"

export const Login = ({onAuth}) => {
    const [username, setUsername] = useState("")
    const [pword, setPword] = useState("")

    const onSubmit = () => {
        onAuth(username)
    }
    return (
        <Form className="login">
            <Form.Field>
                <label>Username</label>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <Input onChange={(e) => setPword(e.target.value)} value={pword} type="password"/>
            </Form.Field>
            <Button onClick={onSubmit} type='submit'>Log in!</Button>
        </Form>
    )
}