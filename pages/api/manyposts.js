// import connectDB from '@ui/utils/connectDB'
// connectDB()
//
// import Post from '@models/post'
// import posts from '@utils/posts'
//
// export default async function (req, res) {
//   let array = [];
//
//   posts.forEach(post => {
//     array.push({
//       title: post.name,
//       content: {
//         data: post.content
//       },
//       image: post.image,
//       category: post.category,
//       author: post.author
//     })
//   })
//
//   try {
//     const response = await Post.insertMany(array)
//
//     res.send(response);
//   } catch (e) {
//     res.send(e)
//   }
// }
