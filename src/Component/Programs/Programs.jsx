import React from 'react'
import './Programs.css'
import prog_1 from '../../assets/program-1.png';
import prog_2 from '../../assets/program-2.png';
import prog_3 from '../../assets/program-3.png';
import prog_icon_1 from '../../assets/program-icon-1.png';
import prog_icon_2 from '../../assets/program-icon-2.png';
import prog_icon_3 from '../../assets/program-icon-3.png';
const Programs = () => {
    return (
        <div className="programs ">
            <div className="program">
                <img src={prog_1} alt="" />
                <div className="caption">
                    <img src={prog_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prog_2} alt="" />
                <div className="caption">
                    <img src={prog_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prog_3} alt="" />
                <div className="caption">
                    <img src={prog_icon_3} alt="" />
                    <p>Post Graduation Degree</p>
                </div>
            </div>
        </div>
    )
}

export default Programs