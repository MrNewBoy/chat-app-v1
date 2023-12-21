import React, { useState } from "react";

const Vote = () => {
  const [votes, setVotes] = useState({ up: 0, down: 0 });

  const countVotes = (id) => {
    if (id === "up") {
      setVotes({ ...votes, up: votes.up + 1 });
    } else if (id === "down") {
      setVotes({ ...votes, down: votes.down + 1 });
    }
  };

  return (
    <div className="flex justify-end gap-1">
      <button
        className="border w-fit p-1 bg-slate-200 rounded-md"
        id="up"
        onClick={(e) => countVotes(e.target.id)}
      >
        up {votes.up}
      </button>
      <button
        className="border w-fit p-1 bg-slate-200 rounded-md"
        id="down"
        onClick={(e) => countVotes(e.target.id)}
      >
        down {votes.down}
      </button>
    </div>
  );
};

export default Vote;
