import React from 'react'
import style from "./Index.module.css"
import { useHistory } from "react-router-dom"

function Index() {
    const history = useHistory();
    return (
        <div className={style.index}>
            <div className={style.message}>
                <p className={style.title}>Welcome to the Dogs App!</p>
                <p className={style.text}>Get to learn everything about your favorite dog.</p>
                <button className={style.button} onClick={() => history.push('/home')}>Enter</button>
            </div>
        </div>
    )
}

export default Index