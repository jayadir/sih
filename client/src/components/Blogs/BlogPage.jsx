import React from "react";
import styles from './BlogPage.module.css';  // Import CSS module

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Constitutional Rights",
      content: "The Indian Constitution grants citizens fundamental rights such as equality, freedom, and protection against exploitation. It’s crucial to understand how these rights impact everyday life."
    },
    {
      id: 2,
      title: "Recent Amendments and Their Impacts",
      content: "Recent constitutional amendments have changed the landscape of various rights. This blog discusses some of the key amendments and their potential impact."
    },
    {
      id: 3,
      title: "Common Constitutional Violations",
      content: "Learn about some of the most common ways the Constitution is violated, often unknowingly, and the punishments associated with such violations."
    }
  ];

  return (
    <div className={styles.blogContainer}>
      {/* Button to create a new blog at the top */}
      <div className={styles.buttonContainer}>
        <button className={styles.createBlogButton}>Create New Blog</button>
      </div>
      
      <h2 className={styles.blogHeading}>Blog Articles</h2>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{blog.title}</h5>
              <p className={styles.cardText}>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
