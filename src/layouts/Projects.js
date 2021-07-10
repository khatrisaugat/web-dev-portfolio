import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import projectsData from "../assets/data/projectsData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
function Projects() {
    const handleLeftClick = () => {
        if (counter === 0) {
            counterFuct(Math.round(projectsData.length / 3) - 1);
        }
        //console.log(projectsData.length)
        else {
            counterFuct(counter - 1);
        }
    }
    const handleRightClick = () => {
        if (counter < Math.round(projectsData.length / 3) - 1)
            //console.log(projectsData.length)
            counterFuct(counter + 1);
        else
            counterFuct(0);
    }
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    const noOfCard = 3;
    const [counter, counterFuct] = useState(0);
    const items = sliceIntoChunks(projectsData, noOfCard)
    console.log(items);
    // console.log(projectsData);
    return (
        <div className="projects">
            <div className="main-glass">
                <div className="part-heading">
                    <h2>Projects</h2>
                </div>
                <div className="multi-carousel">
                    {/* {console.log(counter)} */}
                    {items[counter].map((cur, i) => <CarouselItem title={cur.title} description={cur.description} key={i} />)}
                </div>
            </div>
            <span className="left-arrow" onClick={handleLeftClick}><FaArrowAltCircleLeft /></span>
            <span className="right-arrow" onClick={handleRightClick}><FaArrowAltCircleRight /></span>
        </div>
    )
}

export default Projects
