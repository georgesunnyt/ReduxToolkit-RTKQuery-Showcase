import { useSelector } from "react-redux"

export default function Output () {

    let message = useSelector(state=>state.selection.outputMessage)

    return ( 
        <div key={Math.random()} className="output">
            <span>{message}</span>
        </div>
    )
}