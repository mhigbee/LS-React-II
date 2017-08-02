import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
  const newObject = props.PostData;
  
  const userNameImage = (
    <div>
      {props.postData.map((post, i) => { 
        return <section className="post-container-section">
          <div>
            <span>
            <img key={post.i} src={post.thumbnailUrl} alt="username"/>
          </span>
          <span key={post.i}>
            {post.username}
          </span>
          </div>
          <div>
            <img key={post.i} src={post.imageUrl} alt="main"/>
          </div>   
        </section>
      })}
    </div>
  );
  return (
    <div>
      { userNameImage }
    </div>
  )
};

export default PostContainer;


// {this.state.movies.map((obj, i)=> {
//           return <li key={i} onClick={()=>{this.selectSingleEl(obj.director)}}>{obj.director} directed: {obj.movie}</li>
//         })}


/* username: "philzcoffee",
        thumbnailUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
        imageUrl: 'https://scontent-sjc2-1.cdninstagram.com/t51.2885-15/e35/20066915_1526002357431295_3266739979170086912_n.jpg',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just delicious coffees to offer at our shops!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ] */



  //       const sidebar = (
  //   <ul>
  //     {props.posts.map((post) =>
  //       <li key={post.id}>
  //         {post.title}
  //       </li>
  //     )}
  //   </ul>
  // );