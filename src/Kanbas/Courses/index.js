import db from "../../Kanbas/Database";
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Courses() {
    const {courseId} = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    return (
        <div>
            <div className="title-content">
                <div className="d-flex align-items-center mt-3">
                    <FontAwesomeIcon className="text-danger me-2" icon={faBars}/>
                    <p className="text-danger ml-2 mb-0">{course.name}</p>
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default Courses;
