import React from 'react';
import '../assets/styles/Blog.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogLeft from '../components/BlogLeft';
import BlogRight from '../components/BlogRight';
import Img_1 from '../assets/images/single_blog_1.png';
import Img_2 from '../assets/images/single_blog_2.png';
import Img_3 from '../assets/images/single_blog_3.png';

const Blog = () => {
    const blogPosts = [
        {
            date: '15 Jan',
            title: 'Google inks pact for new 35-storey office',
            description: 'That dominion stars lights dominion divide years for fourth...',
            image: Img_1,
            category: 'Travel, Lifestyle',
            comments: '0 Comments'
        },
        {
            date: '15 Jan',
            title: 'The Future of Tech in 2024',
            description: 'Technological advancements in AI and machine learning...',
            image: Img_2,
            category: 'Tech, Innovation',
            comments: '3 Comments'
        },
        {
            date: '15 Jan',
            title: 'The Future of Tech in 2024',
            description: 'Technological advancements in AI and machine learning...',
            image: Img_3,
            category: 'Tech, Innovation',
            comments: '3 Comments'
        },
    ];

    return (
        <>
            <div className="AboutBackground">
                <Navbar />
                <div className="About-content">
                    <h2>Blog</h2>
                </div>
                <div className="BlogLayout">
                        <BlogLeft blogPosts={blogPosts} />
                        <BlogRight />
                    </div>
                <Footer />
            </div>
        </>
    );
};

export default Blog;
