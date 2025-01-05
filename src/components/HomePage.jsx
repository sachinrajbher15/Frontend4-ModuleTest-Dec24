import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postsActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Home Page</h1>
      <div className='home-container'>
      {data.map((post) => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <h3>{post.title.slice(0, 30)}...</h3>
          <p>{post.body.slice(0, 100)}... <Link to={`/item/${post.id}`}>Read More...</Link></p>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default HomePage;
