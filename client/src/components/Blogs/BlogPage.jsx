import React from "react";
import styles from "./BlogPage.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Violation of Freedom of speech",
      content: "Stand-up comedian was arrested in 2021 for allegedly hurting religious sentiments."
    },
    {
      id: 2,
      title: "Contempt of Court (Article 129)",
      content: "A lawyer was fined for contempt of court in 2020 after criticizing the judiciary."
    }
  ];
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.blogContainer}>
      {/* Button to create a new blog at the top */}
      <div className={styles.buttonContainer}>
        <button className={styles.createBlogButton}>Create New Blog</button>
        <button className={styles.goHomeButton} onClick={handleGoHome}>
          Home
        </button>
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
