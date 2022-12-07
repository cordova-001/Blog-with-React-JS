import { useState } from "react";
import LogList from "./LogList";

const BlogList = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My Site', body: 'Alhamdulillah for the gift of life', id: 1 },
        { title: 'Sermon Two', body: 'All praises are due to Allah', id: 2 },
        { title: 'My Site', body: 'There is no deity worthy of worship execpt Allah', id: 3 }
    ]);
    return (
        <div className="home">
            <LogList blogs={blogs} title="The List" />
            <LogList blogs={blogs.filter((blog) => blog.title === 'My Site')} title="Short List" />
        </div>
    );
}

export default BlogList;