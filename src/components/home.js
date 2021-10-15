import react from "react"
import {useHistory, Link} from 'react-router-dom'

export default function Home() {
return(
    <div>
        <Link id='order-pizza' to='/pizza'>The best pie around</Link>
    </div>
)


}