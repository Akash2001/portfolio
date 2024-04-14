import React, { useState } from "react";
import { Modal } from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const ModalComponent = ({ isOpen, setIsOpen, images, title }) => {
  const [index, setIndex] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleImageChange = (e, isRight = false) => {
    if (isRight && index < images.length - 1) {
      setIndex(index + 1);
    } else if (isRight === false && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-[#fff] p-4 rounded-md">
          <div className="flex justify-end">
            <IoClose className="w-8 h-8 cursor-pointer" onClick={handleClose} />
          </div>
          <div className="text-center mb-4 mt-2 text-lg font-bold">{title}</div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <FaAngleLeft
                className="w-8 h-8 cursor-pointer"
                onClick={handleImageChange}
              />
            </div>
            <div>
              <img
                className="w-[60vw] h-[70vh] rounded-md object-contain"
                src={images[index].img}
                alt="displayed_image"
              />
              <div className="text-center mt-4">{images[index].caption}</div>
            </div>
            <div className="flex items-center">
              <FaAngleRight
                className="w-8 h-8 cursor-pointer"
                onClick={(e) => handleImageChange(e, true)}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
