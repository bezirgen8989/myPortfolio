import React from 'react';
import './resume.scss'
import ImageCarousel from "../../common/ImageCarousel/ImageCarousel";
import LableElements from "../../common/LableElements/LableElements";
import BigLableElements from "../../common/LableElements/BigLableElements";

const Resume = ({resumePageData, reduxStore}) => {

    const resumeData = {
        ...resumePageData
    }
    const infoData = {
        ...resumePageData.info
    }
    return (
        <div className={'ResumeBox'}>
            <div className={"ResumeBox__carouselDiv"}>
                <ImageCarousel
                    imageArr={resumeData.images}
                />
            </div>

            <div className={"ResumeBox__generalInfo"}>
                <BigLableElements bigLableText={"General information"}/>
                <LableElements lableInfo={"Full name"} infoSpan={infoData.generalInfo.fullName}/>
                <LableElements lableInfo={"Date of Birth"} infoSpan={infoData.generalInfo.dateBirth}/>
                <LableElements lableInfo={"Desired income level"} infoSpan={infoData.generalInfo.desiredIncome}/>
                <LableElements lableInfo={"Address"} infoSpan={
                    [infoData.generalInfo.address].map(item => `${item.country},${item.region},${item.city},${item.strit}`)}/>
                <LableElements lableInfo={"eMail"} infoSpan={infoData.generalInfo.eMail}/>
            </div>

            <div className={"ResumeBox__education"}>
                <BigLableElements bigLableText={"Education"}/>
                <LableElements
                    lableInfo={infoData.generalInfo.education.date}
                    infoSpan={infoData.generalInfo.education.faculty}
                />
            </div>

            <div className={"ResumeBox__experience"}>
                <BigLableElements bigLableText={"Experience"}/>
                <LableElements
                    lableInfo={infoData.generalInfo.experience.where}
                    infoSpan={infoData.generalInfo.experience.byWhom}/>
                <LableElements lableInfo={"Duties"} infoSpan={""}/>
                <ul>
                    {infoData.generalInfo.experience.duties.map(items =><li key={items}>{items}</li>)}
                </ul>
            </div>

            <div className={"ResumeBox__skills"}>
                <BigLableElements bigLableText={"Professional skills"}/>
                <ul>
                    {infoData.generalInfo.professionalSkills.map(item=><li key={item}>{item}</li>)}
                </ul>
            </div>

        </div>
    )
}

export default Resume;