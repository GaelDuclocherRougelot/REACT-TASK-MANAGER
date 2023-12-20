/* eslint-disable react/prop-types */
import svgs from "../../assets/svgs";
export default function Task({ task = {}, handleDeleteTask }) {
  return (
    <li
      key={task.id}
      className="bg-white w-full p-2 rounded-md overflow-hidden text-ellipsis flex justify-between"
    >
      {task.title}
      <button onClick={() => handleDeleteTask(task.id)} className="mr-2">
        <svgs.cross />
      </button>
    </li>
  );
}
