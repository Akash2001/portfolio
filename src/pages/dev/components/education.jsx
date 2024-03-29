import { useState } from "react";
import { ModalComponent } from "../../../common/modal";
import { Images } from "../../../data/images";

export const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <div>Education:</div>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="bold-txt">
          Bachelor of Technology Computer Science and Engineering (CGPA:8.3)
        </div>
        <div className="bold-txt text-small">
          Government College of Engineering, Aurangabad (Maharashtra, India) |
          July 2019 - May 2023
        </div>
      </div>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={Images.college}
        title="Government College of Engineering, Aurangabad"
      />
    </div>
  );
};
