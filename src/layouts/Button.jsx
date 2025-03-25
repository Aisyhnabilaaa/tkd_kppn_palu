import React from 'react'

const Button = () => {
    return (
        <div>
            <button className={`${props.backgroundColor} text-black rounded-full px-8 font-medium hover:bg-yellow-400 hover:text-white transition-all`}>
                {props.title}
            </button>
        </div>
    )
}

export default Button