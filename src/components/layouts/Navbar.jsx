import {FaGithub} from 'react-icons/fa';
import PropTypes from 'prop-types'
import  {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content mb-12">
        <div className="container mx-auto">
            <div className="flex-none mx-2 px-2">
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to='/' className='align-middle text-lg font-bold'>
                    {title}
                </Link>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to='/' className="btn btn-sm btn-ghost rounded-btn">
                        Home
                    </Link>
                    <Link to='/about' className="btn btn-sm btn-ghost rounded-btn">
                        About
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: "Github Finder"
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar