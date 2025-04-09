import React from 'react'
import './UserHomepage.css'
import userImage from '../assets/images/user.png'
import Headline from '../assets/images/headline.png'
import worldnewsImg from '../assets/images/worldnewsImg.png'
import sportsImg from '../assets/images/sportsImg.png'
import businessImg from '../assets/images/businessImg.png'
import entertainmentImg from '../assets/images/entertainment.png'
import technologyImg from '../assets/images/technologyImg.png'
import scienceImg from '../assets/images/scienceImg.png'
import healthImg from '../assets/images/healthImg.png'
import nationImg from '../assets/images/nationImg.png'
import generalImg from '../assets/images/generalImg.png'
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
import blog4 from '../assets/images/blog4.png'
import blog5 from '../assets/images/blog5.png'
import blog6 from '../assets/images/blog6.png'
import CreateBlog from './others/CreateBlogpage'


// import {useNavigate} from 'react-router-dom'

  
const UserHomepage = () => {

  // const navigate = useNavigate();

  // const handleAddBlog=()=>{
  //   navigate('./createBlogpage')
  // }

  return (
    <div className='news'>
      <header className='news-header'>
        <h1 className='logo'>News & Blog App</h1>

        <div className='search-bar'>
            <form>
                <input type="text" placeholder='Search News...'/>
                <button type='submit'>
                <i className="fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
        <button><a href={CreateBlog}>+ Add Blogs</a></button>
      </header>
      <div className='news-content'>
        <div className='navbar'>
            <div className='user'>
                <img src={userImage} alt="user image"/>
                <p>Mary's Blog</p>
            </div>
            <nav className="categories">
                <h1 className='nav-heading'>Categories</h1>
                <div className="nav-links">
                    <a href='#' className='nav-link'>General</a>
                    <a href='#' className='nav-link'>World</a>
                    <a href='#' className='nav-link'>Business</a>
                    <a href='#' className='nav-link'>Technology</a>
                    <a href='#' className='nav-link'>Entertainment</a>
                    <a href='#' className='nav-link'>Sports</a>
                    <a href='#' className='nav-link'>Science</a>
                    <a href='#' className='nav-link'>Health</a>
                    <a href='#' className='nav-link'>Nation</a>
                    <a href='#' className='nav-link'>Bookmarks <i className="fa-regular fa-bookmark"></i></a>
                </div>
            </nav>
        </div>
        <div className="news-section">
            <div className="headline">
              <img src={Headline} alt='headline image'/>
              <h2 className='headline-title'>Headlines</h2>
              <i className='fa-regular fa-bookmark bookmark'></i>
            </div>
            
            <div className="news-grid">
              <div className="news-grid-item">
                <img src={generalImg} alt='General image'/>
                <h3>News</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={nationImg} alt='nation image'/>
                <h3>Nation</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={worldnewsImg} alt='world news image'/>
                <h3>World</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={healthImg} alt='health image'/>
                <h3>Health</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={sportsImg} alt='sports image'/>
                <h3>Sports</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={entertainmentImg} alt='Entertainment image'/>
                <h3>Entertainment</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={scienceImg} alt='Science image'/>
                <h3>Science</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={technologyImg} alt='Technology image'/>
                <h3>Technology</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
              <div className="news-grid-item">
                <img src={businessImg} alt='Business image'/>
                <h3>Business</h3>
                <i className='fa-regular fa-bookmark bookmark'></i>
              </div>
            </div>
            
        </div>
        <div className="my-blogs">
          <div className="my-blogs-header">
            <h2>My Blogs</h2>
            <i className='fa-solid fa-plus plus'></i>
            </div>
            <div className="blogs-grid">
              <div className="blogs-grid-item">
                <img src={blog1} alt='Blog 1'/>
                <h3>First Blog</h3>
              </div>
              <div className="blogs-grid-item">
                <img src={blog2} alt='Blog 2'/>
                <h3>second Blog</h3>
              </div>
              <div className="blogs-grid-item">
                <img src={blog3} alt='Blog 3'/>
                <h3>Third Blog</h3>
              </div>
              <div className="blogs-grid-item">
                <img src={blog4} alt='Blog 4'/>
                <h3>Fourth Blog</h3>
              </div>
              <div className="blogs-grid-item">
                <img src={blog5} alt='Blog 5'/>
                <h3>Fourth Blog</h3>
              </div>
              <div className="blogs-grid-item">
                <img src={blog6} alt='Blog 6'/>
                <h3>Fourth Blog</h3>
              </div>
            </div>
        </div>
      </div>

      <footer className='news-footer'>
          <p>&copy; {new Date().getFullYear()} News & Blog App. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy | </a>
            <a href="#">Terms of Service | </a>
            <a href="#">Contact Us</a>
          </div>
          <div className="social-media">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
      </footer>
    </div>
  )
}

export default UserHomepage
