import React , { useState } from 'react';
import Container from '../../../utils/Container'
import CreateImg  from '../../../components/images/logo-image.svg'
import { auth, provider } from '../../../firebase/firebaseconfig';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import instance from './../../../api/instance';
import './Create.scss'



const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [formData, setFormData] = useState({
        avatar: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
        email: "",
        name: "",
        password: ""
    })

    const createAccoutWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const createUserWithEmail = (e) => {
        e.preventDefault()
        instance.post("/users", formData)
            .then(response => {
                if (response.data) {
                    dispatch(
                        { 
                            user: response.data,
                            type: "CREATE_USER"
                        }
                    )
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <section className='create-section'>
            <Container>
                <h1 className='create-title'>Create an account</h1>
                <div className="create-box">
                    <img src={CreateImg} alt="Create-img" className='create-image' />
                    <span className='careate-sing__link'><p>Already a member?</p> <Link to="/auth/login"> Sign in</Link> </span>
                    <ul className='create-list'>
                        <li className='create-item'>
                            <form className='create-form' onSubmit={createUserWithEmail}>
                                <div className="create-tabs">
                                    <input className="create-lastName" type="text" placeholder="First" onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    <input className="create-lastName" type="text" placeholder='Last name' />
                                </div>
                                <input className='create-lastName' type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                <input className='create-lastName' type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} />
                                <button type='submit' className='create-btn'>Create account</button>
                            </form>
                        </li>
                        <li className='create-line'>
                            <hr />
                            or
                            <hr />
                        </li>
                        <li className='create-item'>
                            <button onClick={createAccoutWithGoogle} className="create-google__btn"><FcGoogle />Continue with Google</button>
                        </li>
                    </ul>                    
                </div>

            </Container>
        </section>
    );
};

export default Create;