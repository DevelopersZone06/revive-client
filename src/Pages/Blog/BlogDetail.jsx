import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { FaShare } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton,FacebookIcon,TwitterIcon } from "react-share";
import BlogTitle from "./BlogTitle";

const BlogDetail = ({ blog }) => {
  //  practice json datas

  const [comments, setComments] = useState([]);

  const [reactionNumber, setReactionNumber] = useState(blog?.reacts || 0);

  const [isReacted, setIsReacted] = useState(false);
  const currentPageUrl= `https://soft-monstera-bbb73f.netlify.app/blog/65b2434b8209fff72f1ace46`

  useEffect(() => {
    fetch("/comments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleIncreaseReaction = () => {
    setIsReacted(!isReacted);
    setReactionNumber(reactionNumber + 1);
  };

  const handleDecreaseReaction = () => {
    setIsReacted(!isReacted);
    setReactionNumber(reactionNumber - 1);
  };

  const title = "Maditation that makes you strong";
  const image =
    "https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg";
  const userProfilePicture =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg";
  const authorName = "John Doe";

  const publishDate = "12-04-2023";

  const commentNumber = 32;

  const authorPosition = "Trainer and Writer";

  //    practice json data

  // const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <>
      {/* main div starts */}
      <BlogTitle></BlogTitle>
      <div className="flex max-w-[1600px] mx-auto">
        <div className="w-[60%]">
          <div>
            <h3 className="text-5xl my-10 font-bold">{title}</h3>

            <div className="my-20">
              {/* image of the blog post  */}
              <img src={image} alt="" />
              {/* published date and the reaction and comment icon and number */}
              <div className="flex items-center justify-between">
                {/* published date */}
                <p className="text-xl mt-1 font-semibold">
                  Published: {publishDate}
                </p>
                {/* div for reaction and comment */}
                <div className="flex p-4">
                  {isReacted ? (
                    <img
                      onClick={handleDecreaseReaction}
                      src="https://i.ibb.co/b7QHj8Z/icons8-love-24.png"
                      alt=""
                    />
                  ) : (
                    <img
                      onClick={handleIncreaseReaction}
                      src="https://i.ibb.co/yNHKG1D/icons8-love-24-1.png"
                      alt=""
                    />
                  )}{" "}
                  <p className="px-4">{reactionNumber}</p>
                  <img
                    className="pe-4"
                    src="https://i.ibb.co/MchxQgJ/icons8-comment-24.png"
                    alt=""
                  />
                  <p>{commentNumber}</p>
                  {/* Share */}
                  <div  className="px-4">


                  <label htmlFor="my_modal_7" className="subheading w-14"><FaShare className=""/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box w-64">
  <FacebookShareButton
  url={ currentPageUrl}
  quote="Please share this blog"
  hashtag="#revive"
  >
  {/* <FacebookIcon/> */}
  <FacebookIcon className="pl-9"/>  
  </FacebookShareButton>

  <TwitterShareButton  url={ currentPageUrl}
  quote="Please share this blog"
  hashtag="#revive">
  <TwitterIcon className="pl-5"/>
  </TwitterShareButton>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
                  

                
                   
                  </div>
                </div>
              </div>
            </div>
            {/* mock blog text content */}
            <div className="text-lg px-2 w-full my-20 text-justify">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos voluptatem sint cupiditate, eius ad mollitia quia
                voluptate fugit expedita dicta qui possimus modi corrupti non
                nisi temporibus amet voluptates? Delectus eos, totam excepturi
                tempore sunt rem atque cum voluptatem repudiandae quibusdam qui
                dolor repellat soluta minus optio sit iste provident ullam
                magnam maiores, ea mollitia expedita. Laboriosam expedita minus
                assumenda laborum ut nisi quas placeat praesentium. Quidem minus
                non incidunt rem et accusantium temporibus, nulla corrupti, nemo
                ad soluta quasi deserunt iusto impedit! Voluptatem
                necessitatibus aut veritatis labore blanditiis quibusdam?
              </p>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                reiciendis vitae quo corporis blanditiis? Odit dignissimos
                aspernatur ex doloribus mollitia voluptas aut reprehenderit
                iusto laboriosam asperiores iste voluptatum, soluta optio
                exercitationem autem obcaecati facilis esse? Amet neque adipisci
                porro, modi magni optio sit soluta magnam voluptatibus velit
                nesciunt nulla sapiente dolores impedit, atque perferendis rerum
                incidunt excepturi similique, architecto a dolor cum quam. Modi
                aliquid repudiandae dolores esse quasi, deserunt, officia
                architecto unde quia veniam soluta veritatis a perspiciatis
                aliquam qui maxime numquam laboriosam fuga, quis tenetur
                reprehenderit velit! Magnam quasi, delectus fugiat, adipisci
                repudiandae illum ullam quae cupiditate laboriosam, deleniti
                dolorum quis soluta quidem fuga sequi eius beatae inventore
                provident atque hic corporis! Quam voluptatibus est quia in
                excepturi officiis. Error animi odit obcaecati minima molestiae
                recusandae ut sed earum doloremque quibusdam veritatis, incidunt
                magni consequuntur voluptatem nisi quisquam placeat voluptatibus
                dolor quam quia! Sint esse blanditiis amet officia laudantium
                eligendi eaque nobis laborum, maxime rem nemo doloremque
                delectus cumque quia consectetur, aut omnis in minus suscipit
                voluptatem. Corrupti laudantium minus tenetur cum commodi eum
                quaerat officiis? Esse tenetur ducimus nulla nesciunt, quasi
                necessitatibus, id dolorem eligendi labore libero omnis unde
                doloremque aspernatur! Ducimus nam quis neque nisi iure.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque corporis molestias facere optio, expedita repellendus
                neque dicta quas eum laborum sequi esse qui tenetur, quam
                voluptatibus adipisci blanditiis, ducimus deserunt tempore ab
                sapiente quos. Itaque odio illo dignissimos inventore
                laudantium, incidunt ea odit sed impedit distinctio maxime quae
                eum animi iste id, fugit possimus assumenda nemo, eius aut
                perspiciatis natus doloremque vitae fugiat? Tempore modi dolores
                vero aliquam facilis ex dolor reprehenderit assumenda. Ducimus
                cupiditate sed minus mollitia facilis nam voluptatibus natus,
                provident voluptatum nemo soluta qui assumenda nulla dolorum.
                Incidunt, dolorem. Quia ducimus, placeat minima, incidunt
                eligendi modi, dolores necessitatibus veritatis quo sunt
                recusandae ea iste magnam officiis? Eveniet iste voluptatem sed
                cupiditate natus ipsa fuga recusandae nisi minus cumque.
                Distinctio aliquid ut amet voluptas excepturi ab saepe eius
                autem hic repellendus incidunt vero fuga cum, similique a
                commodi inventore facilis illum atque rerum asperiores dicta. At
                mollitia iure recusandae aspernatur ad soluta a esse magnam
                harum consectetur, facilis repellendus possimus id doloribus
                facere voluptatem aperiam quo, itaque, necessitatibus placeat
                aliquam expedita perferendis. Quia magni, voluptatum maiores
                earum neque, cupiditate voluptates sunt hic quasi illo sit
                aspernatur blanditiis eius, alias sint dolor perspiciatis
                nostrum repudiandae! Blanditiis possimus sequi numquam culpa
                assumenda quia? Maiores iste dicta id maxime optio illum quasi
                sapiente aut, ut alias vero aliquam, iusto libero adipisci quos
                neque et tempore explicabo nihil. Culpa ab beatae neque quae
                laudantium nemo totam sed itaque in explicabo veritatis eligendi
                sint atque vel eaque quod soluta fuga ex, animi similique.
              </p>{" "}
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam quibusdam quasi magni. Deserunt corporis, pariatur
                quidem quia hic voluptas quos rerum harum eos labore eaque?
                Dolorem animi cum, molestias esse quis ratione quos quidem
                aspernatur excepturi aperiam? Libero, assumenda fugiat ipsum
                doloribus quisquam qui velit laudantium necessitatibus, suscipit
                voluptatum impedit id tempora consequuntur ipsa iure mollitia
                deleniti magni placeat sunt. Minima dicta, possimus sapiente
                assumenda voluptate error quibusdam inventore, ducimus,
                architecto repellat nulla animi laborum repellendus perferendis
                cum! Maxime eius mollitia quos officia, necessitatibus ullam
                inventore quam atque vero exercitationem saepe, quo nobis sit
                fugit! Cum magni aspernatur ex dicta!
              </p>
            </div>
            
          </div>
        </div>
        <div className="w-[40%] ps-10 ">
          <div className="">
            {/* author related informations */}
            <div>
              <div className="my-16 flex">
                <div className="avatar me-2">
                  <div className="w-16 rounded-btn">
                    <img src={userProfilePicture} />
                  </div>
                </div>
                <div>
                  <p className="hover:text-green-600 hover:underline text-2xl font-semibold">
                    {authorName}
                  </p>
                  <p className="text-[#E5C466] text-xl font-semibold">
                    {authorPosition}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-success"></div>
          <div className="lg:flex items-center justify-between ">
            <h4 className="text-3xl font-semibold">All comments</h4>
            <select className="p-1 rounded-md bg-[#5999833a]" name="" id="">
              <option value="recent">Recent</option>
              <option value="all">All Comments</option>
              <option value="relevant" selected>
                Most relevant
              </option>
              <option value="trainers">From trainers</option>
              <option value="admin">From admin</option>
            </select>
          </div>
          <textarea
            className="border mt-1 w-full rounded-lg p-2 bg-[#cce0d98b]"
            placeholder="Your comment"
          ></textarea>
          <div>
            <button className="bg-[#599983] p-1 rounded-md text-white ms-1">
              Post
            </button>
            <button className="bg-[#599983] p-1 rounded-md text-white ms-1">
              Cencel
            </button>
          </div>
          {comments.map((comment, index) => (
            <CommentCard key={index} comment={comment}></CommentCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
