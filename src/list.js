import { useState } from "react";

const List = () => {

    const [List, setList] = useState([
        { title: 'New Project', body: 'There is a way to do everything', author: 'Abiodun Akorede', id: 1 },
        { title: 'First Project', body: 'There is a way to do everything', author: 'Maryam Akorede', id: 2 },
        { title: 'Second Project', body: 'There is a way to do everything', author: 'Abeke', id: 3 },
        { title: 'Third Project', body: 'There is a way to do everything', author: 'Abike Akorede', id: 5 }
    ])
    return (

        <div className="home">
            {List.map((List) => (
                <div className="head" key={List.id}>
                    <h2>{List.title}</h2>
                    <p>Written by {List.author}</p>

                </div>
            )
            )
            }
        </div>


    );
}

export default List;