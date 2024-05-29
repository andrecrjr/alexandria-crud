import "./global.css"
type Props = {
    label:string
}

const Button = ({label}:Props) =>{
    return <button className="text-red-600">{label}</button>
}

export default Button;