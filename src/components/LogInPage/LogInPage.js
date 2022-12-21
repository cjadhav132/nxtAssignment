import { useState } from "react"

const LogInPage = ({ doLogIn }) => {
    const [mob, setMob] = useState('')
    const [pass, setPass] = useState('')

    const configs = {
        mob: '8806411623',
        passcode: 'password'
    }

    const handleLogin = () => {
        if (mob === configs.mob) {
            if (pass === configs.passcode) {
                doLogIn()
            }
            else {
                // password error
            }
        }
        else {
            // set up mob error
        }

    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleMob = (e) => {
        const val = e.target.value
        if (val && Number.isInteger(parseInt(val[val.length - 1]))) {
            setMob(val)
        }
    }

    return (
        <div style={{ marginTop: '10%' }}>
            <div>LogIn</div>
            <div>
                <div>
                    <input value={mob} onChange={handleMob} placeholder="Mobile Number" />
                </div>
                <div>
                    <input placeholder="Password" type='password' value={pass} onChange={handlePass} />
                </div>
                <div>
                    <button onClick={handleLogin} >Log In</button>
                </div>
            </div>
        </div>
    )

}

export default LogInPage