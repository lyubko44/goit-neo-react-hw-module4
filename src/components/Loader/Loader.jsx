import { TailSpin } from 'react-loader-spinner';

function Loader() {
    return (
        <div className="loader">
            <TailSpin
                height="80"
                width="80"
                color="#00BFFF"
                ariaLabel="loading"
            />
        </div>
    );
}

export default Loader;