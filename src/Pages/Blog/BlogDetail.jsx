import { useContext, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { FaShare } from "react-icons/fa";
import useClipboard from "react-use-clipboard";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import BlogTitle from "./BlogTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const BlogDetail = () => {

  const [textForCopy, setTextForCopy] = useState(); 

  const [isCopied, setCopied] = useClipboard(textForCopy);

  const currentPageUrl = `https://soft-monstera-bbb73f.netlify.app/blog/65b2434b8209fff72f1ace46`;


  const { user } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const { id } = useParams()

  const [blog, setBlog] = useState({})
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])



  const { _id, author, authorEmail, authorImage, authorTitle, category, date, description, image, title } = blog


  // get single blog comment and like
  useEffect(() => {
    axiosPublic(`blogs?id=${id}`)
      .then(res => {
        setBlog(res.data)

        // get comment 
        axiosPublic(`/comment/${res.data._id}`)
          .then(res => {
            if (res.data) {
              setComments(res.data.allComment)
              setLikes(res.data.likes)
            }
          })
      })
  }, [])


  // setComments(res.data.allComment)
  // setLikes(res.data.likes)

  // post comment 
  const addComment = (e) => {

    e.preventDefault()

    const comment = e.target.comment.value
    const commentIs = {
      name: user?.displayName,
      comment: comment
    }

    const newComment = {
      commentIs
    }

    axiosPublic.patch(`/comments/${_id}`, newComment)
      .then(res => {
        console.log(res.data)
        setComments([commentIs, ...comments])
      })
  }


  // add like 
  const handleLike = () => {
    const newLike = { name: user?.displayName }

    axiosPublic.patch(`/like/${_id}`, newLike)
      .then(res => {
        console.log(res.data)
        setLikes([user?.displayName, ...likes])
      })
  }


  const isReact = likes.includes(user?.displayName)


  return (
    <>
      {/* main div starts */}
      <BlogTitle></BlogTitle>
      <div className="md:flex px-[2%] sm:px-[5%] lg:px-[8%]">
        <div className="md:w-[60%]">
          <div>
            <h3 className="text-5xl my-10 font-bold">{title}</h3>

            <div className="my-20">
              {/* image of the blog post  */}
              <img src={image} alt="" />
              {/* published date and the reaction and comment icon and number */}
              <div className="flex items-center justify-between">
                {/* published date */}
                <p className="text-xl mt-1 font-semibold">
                  Published: {date}
                </p>
                {/* div for reaction and comment */}
                <div className="flex p-4">
                  {isReact ? (
                    <img

                      src="https://i.ibb.co/KbRDCSX/icons8-love-24-4.png"
                      alt=""
                    />
                  ) : (
                    <img
                      onClick={handleLike}
                      src="https://i.ibb.co/zNMtnNc/icons8-love-24-3.png"
                      alt=""
                      className="cursor-pointer"
                    />
                  )}{" "}
                  <p className="px-4">{likes.length}</p>
                  <img

                    className="pe-4"
                    src="https://i.ibb.co/80PGNMg/icons8-comment-24-1.png"
                    alt=""
                  />
                  <p>{comments.length}</p>
                  {/* Share */}
                  <div className="px-4">
                    <label htmlFor="my_modal_7" className="subheading w-14 cursor-pointer">
                      <FaShare className="" />
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my_modal_7"
                      className="modal-toggle "
                    />
                    <div className="modal" role="dialog">
                      <div className="modal-box w-80 py-10 pb-10 ">
                        <h1 className="text-center pb-4 font-bold text-[#448c74]">
                          Share Now
                        </h1>
                        <div className="flex flex-row items-center justify-evenly">
                          <FacebookShareButton
                            url={currentPageUrl}
                            quote="Please share this blog"
                            hashtag="#revive"
                          >
                            {/* <FacebookIcon/> */}
                            <FacebookIcon className=" rounded-lg" />
                          </FacebookShareButton>

                          <TwitterShareButton
                            url={currentPageUrl}
                            quote="Please share this blog"
                            hashtag="#revive"
                          >
                            <TwitterIcon className="rounded-lg" />
                          </TwitterShareButton>

                          <WhatsappShareButton
                            url={currentPageUrl}
                            quote="Please share this blog"
                            hashtag="#revive"
                          >
                            <WhatsappIcon className="rounded-lg" />
                          </WhatsappShareButton>

                          <LinkedinShareButton
                            url={currentPageUrl}
                            quote="Please share this blog"
                            hashtag="#revive"
                          >
                            <LinkedinIcon className="rounded-lg" />
                          </LinkedinShareButton>
                        </div>
                      </div>
                      <label className="modal-backdrop" htmlFor="my_modal_7">
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mock blog text content */}
            <div onClick={() => setTextForCopy(description)} className="text-lg px-2 w-full my-20 text-justify">
              {description}
              <button className="btn" onClick={setCopied}>
                {isCopied ? "Copied to clipboard" : "Copy"}
              </button>
            </div>
          </div>
        </div>



        <div className="md:w-[40%] ps-10 ">
          <div className="">
            {/* author related informations */}
            <div>
              <div className="my-16 flex">
                <div className="avatar me-2">
                  <div className="w-16 rounded-btn">
                    <img src={authorImage} />
                  </div>
                </div>
                <div>
                  <p className="hover:text-sky-800 hover:underline text-2xl font-semibold">
                    {author}
                  </p>
                  <p className="text-[#E5C466] text-xl font-semibold">
                    {authorTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] my-5 w-full bg-sky-800"></div>
          <div className="lg:flex items-center justify-between mb-3">
            <h4 className="text-3xl font-semibold">All comments</h4>
            <select className="p-3 rounded-md  text-sky-100" name="" id="" style={{
              background:
                "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
            }}>
              <option value="recent">Recent</option>
              <option value="all">All Comments</option>
              <option value="relevant" selected>
                Most relevant
              </option>
              <option value="trainers">From trainers</option>
              <option value="admin">From admin</option>
            </select>
          </div>
          <form onSubmit={addComment}>
            <textarea
              className="border mt-1 w-full rounded-lg p-4 my-4 bg-sky-50"
              placeholder="Your comment"
              id="comment"
              name="comment"
              rows={5}
            ></textarea>
            <div>
              <button

                className=" px-5 py-2 mr-2 rounded-md text-white ms-1" style={{
                  background:
                    "radial-gradient(circle, rgba(30,162,184,1) 0%, rgba(6,54,93,1) 100%)",
                }}
              >
                Post
              </button>

            </div>
          </form>


          <div className="overflow-auto max-h-[500px] comment-area mb-10">
            {comments.map((comment, index) => (
              <CommentCard key={index} comment={comment}></CommentCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
