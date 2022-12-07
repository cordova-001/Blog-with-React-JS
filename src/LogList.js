const LogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blogs) => (

                < div className="blogBox" key={blogs.id} >
                    <h2>{blogs.title}</h2>
                    <p>{blogs.body}</p>
                    <p>{blogs.id}</p>
                    <button onClick={() => handleDelete(blogs.id)}>Delete Blog</button>
                </div>

            ))
            }
        </div >
    );
}

export default LogList;