import React, { useState } from "react";
import './Skills.css'
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import Skillinfocard from "./Skillinfocard/Skillinfocard";


const Skills = () => {
    

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

const handleSelectSkill = (data) => {
    setSelectedSkill(data);
};
    
    return(

<section className="skills-container">
   <h5 classname="jh5">My Skill</h5>

   <div className="skills-content">


{SKILLS.map((item)=> (
<SkillCard
key={item.title}
iconUrl={item.icon}
title={item.title}
isActive={selectedSkill.title === item.title}
onClick={ () => {
    handleSelectSkill(item);
}
}
/>
)
)
}

<div className="skills-info">
    <Skillinfocard
    heading={selectedSkill.title}
    Skills={selectedSkill.skills}
    />
</div>

   </div>   


</section>

    )
}

export default Skills;