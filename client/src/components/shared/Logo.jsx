import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png'

const Logo = () => {
    return (
        <Link to='/'>
        <img
          // className='hidden md:block'
          src={logoImg}
          alt='logo'
          width='120'
          height='100'
        />
      </Link>
    );
};

export default Logo;