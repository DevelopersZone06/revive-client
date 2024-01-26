const CommentCard = ({ comment }) => {
  const { name, comment: commentText } = comment || {};


  return (
    <>
      <div className="bg-[#5999834e] my-3 py-4 px-2 rounded-xl">
        <h3 className="py-1 text-lg font-semibold">{name}</h3>
        <p>{commentText}</p>
      </div>
    </>
  );
};

export default CommentCard;
