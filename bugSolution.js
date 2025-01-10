```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function User() {
  let { userId } = useParams();
  return (
    <>
      <h1>User {userId}</h1>
      <Routes>
        <Route path="profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

function UserProfile() {
  let { userId } = useParams();
  return <h1>User Profile {userId}</h1>;
}
export default App; 
```