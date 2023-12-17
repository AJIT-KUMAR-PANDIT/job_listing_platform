import React from 'react'
import CardCss from './Card.module.css'
import peopleimg from '../../assets/group.svg'
import indianflag from '../../assets/india.svg'
import rs from '../../assets/rs.svg'

const Card = ({ companyName, logo, jobPosition, salary, jobType, remoteOffice, location, jobDescription, aboutCompany, skillsRequired, information }) => {
    return (
        <>
            <br />
            <div className={CardCss.card}>
                <div className={CardCss.flex}>
                    <div style={{ width: "100px", height: "100px", backgroundImage: `url(${logo})`, backgroundSize: "contain" }}>
                    </div>

                    <div className={CardCss.shift}>
                        <div className={CardCss.pos}>{jobPosition}</div>
                        <div className={CardCss.lighttxt}>
                            <span className={CardCss.lighttxt}><img src={peopleimg} alt='people' />11-50</span>
                            <span className={CardCss.lighttxt}><img src={rs} alt='india' />{salary}</span>
                            <span className={CardCss.lighttxt}><img src={indianflag} alt='india' />{location}</span>
                        </div>
                        <div>
                           <br/>
                            <span className={CardCss.redtxt}>{jobType}</span>
                            &nbsp; &nbsp; &nbsp; 
                            <span className={CardCss.redtxt}>{remoteOffice}</span>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        skillsRequired.map((skills) => (

                            <span className={CardCss.sbutton} key={skills}>
                                {skills}
                            </span>
                        ))

                    }
                </div>

            </div>
        </>
    )
}

export default Card;