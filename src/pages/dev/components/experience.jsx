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
    <div id="mySkills">
      Experience : <br />
      {experiences.map((experience, i) => {
        return (
          <div className="mb-2" key={i}>
            <div
              className="mb-1 cursor-pointer"
              onClick={(e) => handleToggleCollapse(i)}
            >
              <div className="bold-txt">
                <div>
                  {experience.org} - {experience.role}
                </div>
              </div>
              <div className="flex gap-2 items-center text-small bold-txt">
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
              <ul className="list-disc ml-8">
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
