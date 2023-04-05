import React from 'react'
// import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
// import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
// import Logo from '../components/Logo'
import { Logo } from '../components'

import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            {/* <img src={logo} alt="jobify" className='logo' /> */}
            <Logo/>
        </nav>

        <div className="container page">
            <div className="info">
                <h1>
                    job <span> tracking</span> app
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi exercitationem at aliquid et cupiditate accusantium veritatis quae culpa hic adipisci, fugiat minus atque impedit placeat ipsa numquam optio, a magni debitis rerum tempora! Blanditiis et, eius accusantium facere repudiandae, aliquid at delectus nostrum fugit assumenda inventore laboriosam fuga quae facilis!
                </p>
                <Link to='/register' className='btn btn-hero'>
                    Login/Register
                </Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}

// const Wrapper = styled.main`
// nav{
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
// }

// .page{
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
// }

// h1{
//     font-weight: 700;
//     spanP{
//         color: var(--primary-500);
//     }
// }
// p{
//     color: var(--grey-600);
// }
// .main-img{
//     display: none;
// }
// @media (min-width: 992px){
//     .page{
//         grid-template-columns: 1fr 1fr;
//         column-gap: 3rem;
//     }
//     .main-img{
//         display:block;
//     }
// }
// `

export default Landing