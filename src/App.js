import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/home/Homepage";
import Marketplace from "./pages/marketplace/Marketplace";
import Marketplace2 from "./pages/marketplace/Marketplace2";
import Service1 from "./pages/ourservice/Service1";
import Service2 from "./pages/ourservice/Service2";
import Service3 from "./pages/ourservice/Service3";
import Aboutus from "./pages/company/Aboutus";
import BlogPost from "./pages/blog/BlogPost";
import BlogPostContent from "./pages/blog/BlogPostContent";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/marketplace/1" element={<Marketplace />} />

          <Route path="/marketplace/2" element={<Marketplace2 />} />

          <Route path="/service/1" element={<Service1 />} />

          <Route path="/service/2" element={<Service2 />} />

          <Route path="/service/3" element={<Service3 />} />

          <Route path="/company" element={<Aboutus />} />

          <Route path="/blogpost" element={<BlogPost />} />

          <Route path="/blogpostcontent" element={<BlogPostContent />} />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
