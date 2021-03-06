import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import Note from './Note';
import noteContext from './noteContext';
import '../css/List.css';


export default function List(props) {
 return (
   <noteContext.Consumer>{(context)=>(
   <div className="list container col-3">
     {props.notes.map((note, index) => {
    return(<div key={index} className='col-full'><Link  to={'/note/' + note.id}><Note {...props} name={note.name} id={note.id} modified={note.date_created} folderId={note.folderId} /></Link></div>)
  })}
   </div>)}
   </noteContext.Consumer>
   
 )
}



// note from dummy store
// {
//   "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
//   "name": "Dogs",
//   "modified": "2019-01-03T00:00:00.000Z",
//   "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
//   "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
// },