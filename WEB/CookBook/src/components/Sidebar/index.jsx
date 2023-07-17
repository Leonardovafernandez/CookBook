import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar flex flex-col">
            <div className="flex flex-col items-center px-8 py-10">
                <input />
                <button type='submit'>Search</button>
            </div>
            <div className="flex flex-col px-8 py-10 gap-3">
                <Link to='/home' >Minhas receitas</Link><br/>
                <Link to='/home' >Receitas favoritas</Link><br/>
            </div>
        </div>
    )
}