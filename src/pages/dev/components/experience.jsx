import { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { experiences } from "../../../data";
import { ModalComponent } from "../../../common/modal";

export const Experience = () => {
  const [areDetailsCollapsed, setAreDetailsCollapsed] = useState(
    Array.from({ length: experiences.length }, (_, i) => true)
  );
  const [galleryIndex, setGalleryIndex] = useState(null);

  const handleToggleCollapse = (index) => {
    let temp = [...areDetailsCollapsed];
    temp[index] = !temp[index];
    setAreDetailsCollapsed(temp);
  };

  const handleGalleryOpen = (e, index) => {
    e.stopPropagation();
    setGalleryIndex(index);
  };

  return (
    <div className="text-center bg-light-black p-4">
      <div className="my-2">Experience</div>
      {/* <div className="text-sm">
        With each company I've worked with, I have learned new skills and
        techniques that I bring to every project I work on.
      </div> */}
      {experiences.map((experience, i) => {
        return (
          <div className="mb-4" key={i}>
            <div
              className="mb-1 cursor-pointer"
              onClick={(e) => handleToggleCollapse(i)}
            >
              <div className="bold-txt">
                <div>
                  {experience.org} - {experience.role}
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center text-small bold-txt">
                {experience.location}
                {" | "}
                {experience.duration}
                {experience?.images && (
                  <GrGallery
                    title="Gallery"
                    onClick={(e) => handleGalleryOpen(e, i)}
                  />
                )}
              </div>
            </div>
            {!areDetailsCollapsed[i] ? (
              <ul className="list-disc mx-auto w-fit text-left px-4">
                {experience.details.map((item, j) => {
                  return <li key={i + j}>{item}</li>;
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
        );
      })}
      {(galleryIndex || galleryIndex === 0) && (
        <ModalComponent
          isOpen={galleryIndex || galleryIndex === 0 ? true : false}
          setIsOpen={setGalleryIndex}
          images={experiences[galleryIndex]?.images}
          title={experiences[galleryIndex].org}
        />
      )}
    </div>
  );
};
