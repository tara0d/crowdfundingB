import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import './carousel.css'


// Carousel_Images = async () => {

// }  


// const Carousel = () => {
//     const [projectImage, setProjectImage] = useState([]);
//     const { id } = useParams();


//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_API_URL}images/`)
//         .then((results) => {
//             return results.json();
//         })
//         .then((imageData) => {
//             setProjectImage(imageData);
//         });
//     }, []);

//     return (
//         <div className="carousel-container">
//             {/* <div>This is text {projectImage[1].image_url}</div> */}
//             <div className="carousel-wrapper">
//                 <button className="left-arrow">&lt;</button>
//                 <div className="carousel-content-wrapper">
//                     <div className="carousel-content">
//                         {/* {projectImage[1].image_url} */}
//                     </div>
//                 </div>
//                 <button className="right-arrow">&gt;</button>
//             </div>
//         </div>
//     )
// }

// export default Carousel

const Carousel = (props) => {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length)
    }, [children]);


    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">&lt;</button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">&gt;</button>
            </div>
        </div>
    )
}

export default Carousel
