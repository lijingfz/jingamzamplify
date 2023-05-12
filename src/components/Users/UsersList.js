import {useState, Fragment, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listCFstacks } from '../../graphql/queries';
//const json = require('../../static.json');

export default function UsersList () {
  const [mystack, setTodos] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const mystacklist = await API.graphql(graphqlOperation(listCFstacks))
      setTodos(mystacklist.data.listCFstacks.items)
    }
    fetchTodos()
  }, [])
  const users = mystack
  console.log(users)
  const [userIndex, setUserIndex] = useState(0);
  const user = users[userIndex];

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