import { useState, useRef, useEffect } from "react"
import './__styles__/LogInPage.css'

const LogInPage = ({ doLogIn, goToHome }) => {
    const [mob, setMob] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const mobRef = useRef()
    const passRef = useRef()

    const disableButton = !(mob.length === 10 && pass.length >= 8)

    const configs = {
        mob: '0123456789',
        passcode: 'password'
    }

    useEffect(() => {
        mobRef.current.focus()
    }, [])

    const handleKeys = (e) => {
        if(e.key === 'Enter'){
            handleLogin()
        }
    }

    const handleLogin = () => {
        if (mob === configs.mob) {
            if (pass === configs.passcode) {
                doLogIn()
            }
            else {
                // password error
                setPass('')
                setErrorMsg('Passwrod is incorrect !')
            }
        }
        else {
            // set up mob error
            setMob('')
            setPass('')
            setErrorMsg('Mobile number not registered !')
        }

    }

    const handlePass = (e) => {
        setErrorMsg('')
        setPass(e.target.value)
    }

    const handleMob = (e) => {
        const val = e.target.value
        if (val) {
            if (Number.isInteger(parseInt(val[val.length - 1]))) {
                setErrorMsg('')
                setMob(val)
                if (val.length === 10) {
                    passRef.current.focus()
                }
            }
        }
        else {
            setMob('')
        }
    }

    return (
        <div style={{ marginTop: '10%' }}>
            <div className="LogmainContainer" >
                <div className="midContainer">
                    <div style={{ color: 'red', height: '20px' }} >{errorMsg}</div>
                    <div>
                        <input ref={mobRef} className="inputStyle" value={mob} onChange={handleMob} maxLength={10} placeholder="Mobile Number" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <input
                            ref={passRef}
                            className="inputStyle"
                            placeholder="Password"
                            type='password'
                            value={pass} onChange={handlePass}
                            style={{ width: '100%' }} 
                            onKeyDown={handleKeys}
                            />
                    </div>
                    <div className="row">
                        <div className="col-6" >
                            <button className="btn btn-secondary" onClick={goToHome} >Cancel</button>
                        </div>
                        <div className="col-6" >
                            <button className="btn btn-success" onClick={handleLogin} disabled={disableButton} >Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LogInPage