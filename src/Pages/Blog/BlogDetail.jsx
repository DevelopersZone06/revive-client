
import { useState } from "react";

const BlogDetail = () => {
  //  practice json datas

  const title = "This is a basic blog title";
  const image =
    "https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg";
  const userProfilePicture =
    "https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg";
  const userName = "John Doe";

  const publishDate = "12-04-2023";

  const reacttionNumber = "124";

  const commentNumber = '32'; 

  //    practice json data

  const [isReacted, setIsReacted] = useState(false);

  const [isBookmarked, setIsBookmarked] = useState(false); 

  return (
    <>
      <div className="text-center max-w-[1750px] mx-auto">
        <h3 className="text-5xl my-10 font-bold">{title}</h3>

        <div className="flex items-center justify-between  border-y border-black">
          {/* user profile picture and his/her name */}
          <div className="flex mx-5 items-center my-2">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={userProfilePicture} />
              </div>
            </div>
            <p className="ps-3 text-green-600 underline text-xl font-semibold">
              {userName}
            </p>
          </div>

          {/* published date of that specific post */}
          <div className="mx-5 my-1">
            <p className="text-xl font-semibold">Published: {publishDate}</p>
          </div>
        </div>

        <img className="my-20 mx-auto" src={image} alt="" />
        <div className="text-lg px-2 max-w-[1500px] my-20 mx-auto text-justify">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos voluptatem sint cupiditate, eius ad mollitia quia
            voluptate fugit expedita dicta qui possimus modi corrupti non nisi
            temporibus amet voluptates? Delectus eos, totam excepturi tempore
            sunt rem atque cum voluptatem repudiandae quibusdam qui dolor
            repellat soluta minus optio sit iste provident ullam magnam maiores,
            ea mollitia expedita. Laboriosam expedita minus assumenda laborum ut
            nisi quas placeat praesentium. Quidem minus non incidunt rem et
            accusantium temporibus, nulla corrupti, nemo ad soluta quasi
            deserunt iusto impedit! Voluptatem necessitatibus aut veritatis
            labore blanditiis quibusdam?
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reiciendis vitae quo corporis blanditiis? Odit dignissimos
            aspernatur ex doloribus mollitia voluptas aut reprehenderit iusto
            laboriosam asperiores iste voluptatum, soluta optio exercitationem
            autem obcaecati facilis esse? Amet neque adipisci porro, modi magni
            optio sit soluta magnam voluptatibus velit nesciunt nulla sapiente
            dolores impedit, atque perferendis rerum incidunt excepturi
            similique, architecto a dolor cum quam. Modi aliquid repudiandae
            dolores esse quasi, deserunt, officia architecto unde quia veniam
            soluta veritatis a perspiciatis aliquam qui maxime numquam
            laboriosam fuga, quis tenetur reprehenderit velit! Magnam quasi,
            delectus fugiat, adipisci repudiandae illum ullam quae cupiditate
            laboriosam, deleniti dolorum quis soluta quidem fuga sequi eius
            beatae inventore provident atque hic corporis! Quam voluptatibus est
            quia in excepturi officiis. Error animi odit obcaecati minima
            molestiae recusandae ut sed earum doloremque quibusdam veritatis,
            incidunt magni consequuntur voluptatem nisi quisquam placeat
            voluptatibus dolor quam quia! Sint esse blanditiis amet officia
            laudantium eligendi eaque nobis laborum, maxime rem nemo doloremque
            delectus cumque quia consectetur, aut omnis in minus suscipit
            voluptatem. Corrupti laudantium minus tenetur cum commodi eum
            quaerat officiis? Esse tenetur ducimus nulla nesciunt, quasi
            necessitatibus, id dolorem eligendi labore libero omnis unde
            doloremque aspernatur! Ducimus nam quis neque nisi iure.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corporis molestias facere optio, expedita repellendus neque dicta
            quas eum laborum sequi esse qui tenetur, quam voluptatibus adipisci
            blanditiis, ducimus deserunt tempore ab sapiente quos. Itaque odio
            illo dignissimos inventore laudantium, incidunt ea odit sed impedit
            distinctio maxime quae eum animi iste id, fugit possimus assumenda
            nemo, eius aut perspiciatis natus doloremque vitae fugiat? Tempore
            modi dolores vero aliquam facilis ex dolor reprehenderit assumenda.
            Ducimus cupiditate sed minus mollitia facilis nam voluptatibus
            natus, provident voluptatum nemo soluta qui assumenda nulla dolorum.
            Incidunt, dolorem. Quia ducimus, placeat minima, incidunt eligendi
            modi, dolores necessitatibus veritatis quo sunt recusandae ea iste
            magnam officiis? Eveniet iste voluptatem sed cupiditate natus ipsa
            fuga recusandae nisi minus cumque. Distinctio aliquid ut amet
            voluptas excepturi ab saepe eius autem hic repellendus incidunt vero
            fuga cum, similique a commodi inventore facilis illum atque rerum
            asperiores dicta. At mollitia iure recusandae aspernatur ad soluta a
            esse magnam harum consectetur, facilis repellendus possimus id
            doloribus facere voluptatem aperiam quo, itaque, necessitatibus
            placeat aliquam expedita perferendis. Quia magni, voluptatum maiores
            earum neque, cupiditate voluptates sunt hic quasi illo sit
            aspernatur blanditiis eius, alias sint dolor perspiciatis nostrum
            repudiandae! Blanditiis possimus sequi numquam culpa assumenda quia?
            Maiores iste dicta id maxime optio illum quasi sapiente aut, ut
            alias vero aliquam, iusto libero adipisci quos neque et tempore
            explicabo nihil. Culpa ab beatae neque quae laudantium nemo totam
            sed itaque in explicabo veritatis eligendi sint atque vel eaque quod
            soluta fuga ex, animi similique.
          </p>{" "}
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            quibusdam quasi magni. Deserunt corporis, pariatur quidem quia hic
            voluptas quos rerum harum eos labore eaque? Dolorem animi cum,
            molestias esse quis ratione quos quidem aspernatur excepturi
            aperiam? Libero, assumenda fugiat ipsum doloribus quisquam qui velit
            laudantium necessitatibus, suscipit voluptatum impedit id tempora
            consequuntur ipsa iure mollitia deleniti magni placeat sunt. Minima
            dicta, possimus sapiente assumenda voluptate error quibusdam
            inventore, ducimus, architecto repellat nulla animi laborum
            repellendus perferendis cum! Maxime eius mollitia quos officia,
            necessitatibus ullam inventore quam atque vero exercitationem saepe,
            quo nobis sit fugit! Cum magni aspernatur ex dicta!
          </p>
        </div>
        <div className="border-y my-10 flex items-center justify-between border-black">
          {/* div for reaction and comment */}
          <div className="flex p-4">
            {isReacted ? (
              <img
                onClick={() => setIsReacted(false)}
                src="https://i.ibb.co/b7QHj8Z/icons8-love-24.png"
                alt=""
              />
            ) : (
              <img
                onClick={() => setIsReacted(true)}
                src="https://i.ibb.co/yNHKG1D/icons8-love-24-1.png"
                alt=""
              />
            )} <p className="px-4">{reacttionNumber}</p>
            <img className="pe-4" src="https://i.ibb.co/MchxQgJ/icons8-comment-24.png" alt="" /> 
            <p>{commentNumber}</p>
          </div>
          {/* div for bookmark and share */}
          <div className="flex gap-4 pe-4">
              {
                isBookmarked ? 
                <img onClick={() => setIsBookmarked(false)} src="https://i.ibb.co/hYQ7rcR/icons8-bookmark-24-1.png" alt="" /> : 
                <img  onClick={() => setIsBookmarked(true)} src="https://i.ibb.co/BzShvcP/icons8-bookmark-24.png" alt="" />
              }

              <img src="https://i.ibb.co/3hfc6Tm/icons8-share-24.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
