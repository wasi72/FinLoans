import React from 'react';
const BlogLeft = ({ blogPosts }) => {
    return (
        <div className="blog-left">
            {blogPosts.map((post, index) => (
                <div key={index} className="blog-card">
                    <div className="blog-date">
                        <span>{post.date}</span>
                    </div>
                    <div className="blog-image">
                        <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-details">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p className="blog-meta">
                            {post.category} | {post.comments}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogLeft;
