import React,{useState,useEffect} from 'react';
import './blog.css'
import BlogCard from '../components/BlogCard';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch('/data/blogData.json')
    .then(res => {
      console.log('Response received:', res);
      return res.json();
    })
    .then(data => {
      console.log('Data received:', data);
      setBlogs(data);
    })
    .catch(e => console.error('Error:', e.message));
};
  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <section className="blogs" id="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Our Blog</h4>
        </div>
        <div className="row mt-5">
              {
                blogs && blogs.length >0 && blogs.map(blog => (
                  <BlogCard key={blog._id} blog={blog} />
                ))
              }
        </div>
      </div>
    </section>
  )
}

export default Blog;