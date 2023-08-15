import { TwitterFollowCard } from "../TwitterFollowCard";
import "./App.css";

const users = [
  {
    userName: "angelpuc08",
    name: "Angel Javier Puc Yamá",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: true,
  },
  {
    userName: "leonesdeyucatan",
    name: "Leones de Yucatán",
    isFollowing: false,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
