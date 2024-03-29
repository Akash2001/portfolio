export const Cards = ({ name, img, link, description }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div id="card">
                <a href={link} target="_blank" rel="noreferrer">
                    <div id="img"><img src={img} alt="project" /></div>
                    <div id="name">{name}</div>
                    <div id="description">{description}</div>
                </a>
            </div>
        </div>
    );
}