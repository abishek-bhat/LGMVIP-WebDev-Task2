import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="BallTriangle"
            color="red"
           
            style={{ marginLeft: '260px' }}
            height={100}
            width={100}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
