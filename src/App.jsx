import { Homepage, About, Contact, AllBlogs, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, NewsList } from "./component";
import useFetch from './hooks/useFetch'
 
export default function App() {
  let {loading, data, error} =useFetch('https://travelblog-3py0.onrender.com/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  console.log(data)

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage blogs={data?data:""} />}></Route>
          <Route path="/blogs" element={<AllBlogs blogs={data?data:""} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route>
        </Routes>
        <NewsList/>
    </div>
  );
}
