import {useState, Fragment, useEffect} from 'react';
import {FaArrowRight} from "react-icons/fa";
import { API, graphqlOperation } from 'aws-amplify';
import { listCFtemplates } from '../../graphql/queries';
// const json = require('../../static.json');


export default function BookablesList () {
  const [mytemp, setTodos] = useState([])
  useEffect(() => {
    const fetchTodos = async () => {
      const mytemplate = await API.graphql(graphqlOperation(listCFtemplates))
      setTodos(mytemplate.data.listCFtemplates.items)
    }
    fetchTodos()
  }, [])
  // console.log(mytemp)
  const [group, setGroup] = useState("Dev");
  // console.log(group)
  const bookablesInGroup = mytemp.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(mytemp.map(b => b.group))];

  const bookable = bookablesInGroup[bookableIndex];
  const [hasDetails, setHasDetails] = useState(false);
  
  function changeGroup (event) {
    setGroup(event.target.value);
    setBookableIndex(0);
  }
  
  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  return (
    <Fragment>
      <div>
        <select
          value={group}
          onChange={changeGroup}
        >
          {groups.map(g => <option value={g} key={g}>{g}</option>)}
        </select>

        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li
              key={b.id}
              className={i === bookableIndex ? "selected" : null}
            >
              <button
                className="btn"
                onClick={() => setBookableIndex(i)}
              >
                {b.name}
              </button>
            </li>
          ))}
        </ul>
        <p>
          <button
            className="btn"
            onClick={nextBookable}
            autoFocus
          >
            <FaArrowRight/>
            <span>Next</span>
          </button>
        </p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>
                {bookable.name}
              </h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails(has => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.desc}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>模版文件</h3>
                <div className="bookable-availability">
                <p>{bookable.S3link}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}