import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';

function Register1() {

    const [width, setWidth] = useState(0);
    const navigate = useNavigate();
    const handleInputChange = () => {
        const inputs = document.querySelectorAll('input');
        let count = 0;
        inputs.forEach((input) => {
            if (input.value) {
                count++;
            }
        }
        )
        setWidth(count * 10)
    };
    const areInputsFilled = () => {
        const inputs = document.querySelectorAll('input');
        inputs.forEach((input) => {
            if (input.value) {
                navigate("/reg2");
            }
        })
    };

    return (
        <div>
            <ProgressBar myWidth={width} />

            <div className='bg-dark bg-gradient p-30 rounded text-xl'>
                <>
                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login"
                        >
                            <form>
                                <div className="text-center mb-3">
                                    <p>Regisztráció ezzel:</p>
                                    <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                        <i className="fab fa-facebook-f" />
                                    </button>
                                    <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                        <i className="fab fa-google" />
                                    </button>
                                    <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                        <i className="fab fa-twitter" />
                                    </button>
                                    <button type="button" className="btn btn-link myColor text-2xl btn-floating mx-1">
                                        <i className="fab fa-github" />
                                    </button>
                                </div>
                                <p className="text-center">vagy:</p>

                                <div className='container'>
                                    <div className='row justify-content-center gap-5 m-20'>

                                        <div className='col-4'>
                                            <input
                                                onChange={handleInputChange}

                                                type="email"
                                                className="form-control required bg-dark"

                                                placeholder="Vezetéknév"
                                                id='vezeteknev'
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <input
                                                onChange={handleInputChange}

                                                type="text"
                                                className="form-control required bg-dark"

                                                placeholder="Keresztnév"
                                                id='keresztnev'
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <input
                                                onChange={handleInputChange}

                                                type="text"
                                                className="form-control required bg-dark"

                                                placeholder="Felhasználónév"
                                                id='felhasznalonev'
                                            />
                                        </div>

                                        <div className='col-4'>
                                            <input
                                                onChange={handleInputChange}
                                                type="text"
                                                className="form-control required bg-dark"
                                                name="omazonosito"
                                                placeholder="OM azonosító"
                                                id='omazonosito'
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className='d-flex justify-content-center m-20'>
                                    <a className="nk-btn p-15 border border-danger rounded hover:bg-warning" onClick={areInputsFilled}>
                                        Következő
                                    </a>
                                </div>

                                <div className="text-center">
                                    <p>
                                        Már van fiókod? <a href="#!">Jelentkezz be itt!</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </>

            </div>


        </div>
    )
}

export default Register1