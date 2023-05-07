import {useState, Fragment, useEffect} from 'react';
import {FaArrowRight} from "react-icons/fa";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listCFtemplates } from '../../graphql/queries';
// const json = require('../../static.json');

// 调用 GraphQL 接口读取可用模版信息
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

  //调用 API Gateway 发出 建立 CF 请求，同时传入 S3 模版所在位置以及 Stack 名称
  async function callApi(s3link,stackname){
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log({token},s3link,stackname)

    const requestInfo = {
      headers:{
        Authorization: token
      },
      queryStringParameters:{
        CFtemplate: s3link,
        CFname: stackname
      }
    }

    const data = await API.get('reactauthrestcf','/hello',requestInfo)
    console.log({data})
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
                <button 
                  className="btn"
                  // onClick={callApi(bookable.S3link,'StackName')}>提交部署</button>
                  onClick={()=>callApi(bookable.S3link,'StackName')}>提交部署</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}