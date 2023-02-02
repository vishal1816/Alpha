"use client";

import { motion } from "framer-motion";
import { MyVerticallyCenteredModal } from ".";
import styles from "../styles";
import { fadeIn } from "../utils/motion";


// window.onload = function () {
//   var exampleModal = document.getElementById("exampleModal");

//   exampleModal.addEventListener("show.bs.modal", function (event) {
//     var button = event.relatedTarget;
//     var recipient = button.getAttribute("data-bs-whatever");

//     var modalTitle = exampleModal.querySelector(".modal-title");
//     var modalBodyInput = exampleModal.querySelector(".modal-body input");

//     modalTitle.textContent = "New message to " + recipient;
//     modalBodyInput.value = recipient;
//   });
// };

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  // const handleMOdelToggle = () => {
  //   const m = document.getElementById('exampleModel');
  //   document.getElementById("exampleModal").classList.add("modalShow");
  //   document.getElementById("exampleModal").classList.remove("modelShow");
  //   // if(m.classList.contains('modalShow')){
  //   //   m.classList.add("modalShow");
  //   //   m.classList.remove("fade1");
  //   // }else{
  //   //   m.classList.remove("modalShow");
  //   //   m.classList.add("fade1");
  //   // }
  // };
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className=" my-card font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Operating Model
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[20px] text-[24px] text-white">
            {title}
          </h2>

          <MyVerticallyCenteredModal>
            
          </MyVerticallyCenteredModal>

          {/* <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={() => handleMOdelToggle()}
          >
            button
          </button> */}
       


{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus repellendus harum excepturi deleniti in facilis, perferendis ipsa soluta dolor.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}

        
      
        </div>
      )}
    </motion.div>
  );
};
export default ExploreCard;
