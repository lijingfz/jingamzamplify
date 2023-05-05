const json = require('../../static.json');

export default function UserPicker () {
  const users = json.users
  return (
    <select>
      {users.map(u => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}