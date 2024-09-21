import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../assets/images/single_blog_2.png';
import '../assets/styles/SingleBlog.css';
const SingleBlog = () => {
  return (
    <div className="AboutBackground">
      <Navbar />
      
      <div className="About-content">
        <h2>Single Blog</h2>
      </div>

      <div className="blog-container">
        <div className="blog-left-content">
          <div className="blog-post">
            <div className="blog-image">
              <img src={Img} alt="Blog post" />
            </div>
            <h2>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
            <p className="blog-meta">Travel, Lifestyle | 0 Comments</p>
            <p>
              That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.
            </p>
            <blockquote className="blog-quote">
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.
            </blockquote>
            <p>
              However, who has the willpower to actually sit through a self-imposed MCSE training. MCSE boot camps have its supporters and its detractors.
            </p>
          </div>

          <div className="comments-section">
            <h3>05 Comments</h3>
            <div className="comment">
              <p><strong>Emilly Blunt</strong> - December 4, 2017 at 3:12 pm</p>
              <p>Multiply sea night grass fourth day sea lesser rule open subdue female fill.</p>
            </div>
          </div>

          <div className="reply-section">
            <h3>Leave a Reply</h3>
            <form>
              <textarea placeholder="Write Comment" required></textarea>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="url" placeholder="Website" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="blog-right-content">
          <div className="widget category-widget">
            <h3>Category</h3>
            <ul>
              <li>Travel (37)</li>
              <li>Tech (23)</li>
              <li>Resaurant Food(32)</li>
              <li>Rroduct (3)</li>
              <li>Health Care (21)09</li>
              <li>Inspiration(21)</li>
              <li>Modern technology(03)</li>
            </ul>
          </div>
          
          <div className="widget recent-posts-widget">
            <h3>Recent Posts</h3>
            <ul>
              <li>From life was you fish...</li>
              <li>The Amazing Hubble</li>
            </ul>
          </div>
          
          <div className="widget newsletter-widget">
            <h3>Newsletter</h3>
            <input type="email" placeholder="Enter your mail" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleBlog;
