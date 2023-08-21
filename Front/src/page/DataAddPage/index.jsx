import './index.scss'
import imge from '../../../assets/phone2.png'

import Signup from '../loginPage/signup';
import AddMill from '../../component/DataAdd/mill';
import AddProducts from '../../component/DataAdd/product';
import Model from '../../component/shared/model';
import { Link } from 'react-router-dom';

const AddData = () => {
    // const [notice, setNotice] = useState(false);
    // const [Mill, setMill] = useState(false);
    // const [products, setProducts] = useState(false);
    // const [register, setRegister] = useState(false);


    // const handleClickOpenNotice = () => {
    //     setNotice(true);
    //     setMill(false)
    //     setProducts(false)
    //     setRegister(false)

    // };

    // const handleCloseNotice = () => {
    //     setNotice(false);
    // };
    // const handleClickOpenMill = () => {
    //     setNotice(false);
    //     setMill(true)
    //     setProducts(false)
    //     setRegister(false)

    // };

    // const handleCloseMill = () => {
    //     setMill(false);
    // };
    // const handleClickOpenProduct = () => {
    //     setNotice(false);
    //     setMill(false)
    //     setProducts(true)
    //     setRegister(false)

    // };

    // const handleCloseProduct = () => {
    //     setProducts(false);
    // };
    // const handleClickOpenRegister = () => {
    //     setNotice(false);
    //     setMill(false)
    //     setProducts(false)
    //     setRegister(true)

    // };

    // const handleCloseRegister = () => {
    //     setRegister(false);
    // };


    return (
        <div className="container">
            <h1>Welcome to Admin page</h1>
            <div className="cardItem">
                <div className="row">
                    <div className="card">
                        <img src={imge} alt='imge' />
                        <div className='cardfooter'>
                            <Link to='/addnotice'> <p className='btn btn-primary'  >Notice</p></Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={imge} alt='imge' />
                        <div className='cardfooter'>
                            <Link to='/addmill'><p className='btn btn-primary'  >Daily Mill</p></Link>
                        </div>
                    </div></div>
                <div className="row">
                    <div className="card">
                        <img src={imge} alt='imge' />
                        <div className='cardfooter'>
                            <Link to='/addproducts'> <p className='btn btn-primary'  >Products</p></Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={imge} alt='imge' />
                        <div className='cardfooter'>
                            <Link to='/addusers'> <p className='btn btn-primary'  >Register</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddData