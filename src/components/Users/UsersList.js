import {useState, Fragment, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listCFstacks } from '../../graphql/queries';
import { deleteCFstack } from '../../graphql/mutations';
//const json = require('../../static.json');

export default function UsersList () {
  const [mystack, setTodos] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const listfilter = {
        filter: {
          _deleted: {
            ne: 1
          }
        }
      };
      const mystacklist = await API.graphql({
        query:listCFstacks,
        // variables: listfilter
      })
      setTodos(mystacklist.data.listCFstacks.items)
    }
    fetchTodos()
  }, [])
  const users = mystack
  console.log(users)
  const [userIndex, setUserIndex] = useState(0);
  const user = users[userIndex];
  
  const delCFstack = async(stackid)=>{
    const cfstack = {
      id: stackid,
      _version: 1
    };
    try {
      await API.graphql({ 
        query: deleteCFstack, 
        variables: { input: cfstack }
      });
      console.log('Delete successfully!');
    }
    catch(error){
      console.error('Error creating:',error)
    }
  }

  return (
    <Fragment>
    <ul className="users items-list-nav">
      {users.map((u, i) => (
        <li
          key={u.id}
          className={i === userIndex ? "selected" : null}
        >
          <button
            className="btn"
            onClick={() => setUserIndex(i)}
          >
            {u.stackname}
          </button>
        </li>
      ))}
    </ul>

    {user && (
      <div className="item user">
        <div className="item-header">
          <h2>{user.cftemplate.name}</h2>
          <button
            className='btn'
            onClick={() => delCFstack(user.id)}
          >
           删除
          </button>
        </div>
        <div className="user-details">
          <h3>{user.cftemplate.desc}</h3>
          <p>{user.stackstatus}</p>
          <p>{user.stack}</p>
          <p>{user.createuser}</p>
          <p>{user.cfoutput}</p>

        </div>
      </div>
    )}
  </Fragment>
  );
}