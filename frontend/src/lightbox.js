import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageEnlarge = ({name, imgBig, imgSrc}) => {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className="pic" onClick={() => setOpen(true)}>
                <img src={process.env.PUBLIC_URL + `${imgSrc}`} alt={name} className="paintingPic" />
            </div>
            <Lightbox
                styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .5)" }, button: { width: "50px" }}}
                labels={{ Next: "" }}
                open={open}
                close={() => setOpen(false)}
                slides={[
                    {
                        src: process.env.PUBLIC_URL + `${imgBig}`,
                        alt: {name},
                        width: 1000,
                        height: "auto"
                    }
                ]}
            />
        </>
    );
};

export default ImageEnlarge;