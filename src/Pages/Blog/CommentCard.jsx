const CommentCard = ({ comment }) => {
  const { commentText, authorName } = comment || {};

  console.log(comment)

  return (
    <>
      <div className="shadow-lg shadow-gray-400 my-3 py-7 px-4 rounded-xl">
        <h3 className="py-2 text-lg font-semibold text-[#448c74]">{authorName}</h3>
        <hr className="w-1/4 text-lg"/>
        <p className="text-black pt-2">💬 {commentText} </p>
      </div>
    </>
  );
};

export default CommentCard;
