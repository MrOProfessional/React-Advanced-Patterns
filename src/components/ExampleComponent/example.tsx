import { FC, useState, useEffect } from "react";

// Child component receiving props
const UserCard: FC<{ name: string; age: number }> = ({ name, age }) => (
  <div className="p-4 border rounded-lg shadow-md">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p>Age: {age}</p>
  </div>
);

const App2: FC = () => {
  // State to hold user data
  const [users, setUsers] = useState<{ name: string; age: number }[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect to simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">User List</h2>

      {/* Conditional Rendering */}
      {loading ? (
        <p className="text-gray-600">Loading users...</p>
      ) : users.length > 0 ? (
        <div className="grid gap-3">
          {/* Mapping over an array */}
          {users.map((user, index) => (
            <UserCard key={index} name={user.name} age={user.age} />
          ))}
        </div>
      ) : (
        <p className="text-red-500">No users found.</p>
      )}
    </div>
  );
};

export default App2;
