import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../actions/postsActions';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const post = data.find((post) => post.id === parseInt(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className='container-details'>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User ID: {post.userId}</p>
      <h1>Title: {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailPage;
