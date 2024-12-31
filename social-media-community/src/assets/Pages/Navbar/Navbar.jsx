
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center shadow-md p-5">
                <Link to='/'>
                <button className='text-4xl font-bold'>LOGO</button>
                </Link>
                <ul className="flex justify-center gap-6">
                    <li><Link to="/allClubs">All Clubs</Link></li>
                    <li>Feed</li>
                    <li>Add Club</li>
                    <li>Checkout</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;