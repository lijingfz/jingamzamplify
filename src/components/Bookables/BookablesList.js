import {useState, Fragment} from 'react';
import {FaArrowRight} from "react-icons/fa";
const json = require('../../static.json');


export default function BookablesList () {
  const [group, setGroup] = useState("Kit");
  console.log(group)
  const bookablesInGroup = json.bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(json.bookables.map(b => b.group))];

  const bookable = bookablesInGroup[bookableIndex];
  const [hasDetails, setHasDetails] = useState(false);

  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  return (
    <Fragment>
      <div>
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
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
                {b.title}
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
                {bookable.title}
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

            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days
                      .sort()
                      .map(d => <li key={d}>{json.days[d]}</li>)
                    }
                  </ul>
                  <ul>
                    {bookable.sessions
                      .map(s => <li key={s}>{json.sessions[s]}</li>)
                    }
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}