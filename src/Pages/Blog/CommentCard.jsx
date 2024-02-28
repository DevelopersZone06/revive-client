import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const CommentCard = ({ comment }) => {

  // console.log(comment)
 

  return (
    <>
      <div className="shadow-lg shadow-gray-400 my-3 py-7 px-4 rounded-xl">
      <div className="flex items-center gap-3 my-3">
      <img src={comment.img} alt="" className="h-10 w-10 rounded-full" />
        <h3 className="py-2 text-lg  text-sky-800 font-bold">{comment.name}</h3>
      </div>
        <hr className="w-1/4 text-lg"/>
        <p className="text-black pt-2">💬 {comment.comment} </p>
      </div>
    </>
  );
};

export default CommentCard;
