import React, { useEffect, useState } from 'react'
import Nav from '../../Components/Nav/Nav'
import JobFinderCss from './JobFinder.module.css'
import Card from '../../Components/Card/Card'
import axios from 'axios'


const JobFinder = () => {


    const [searchtype, setSearchtype] = useState('        Type any job title');
    const [jobs, setJobs] = useState([]);


    const fetchData = async (event) => {


        try {
            const response = await axios.get('http://localhost:5000/jobView');
            setJobs(response.data.data);

        } catch (error) {
            console.error(error.response.data);

        }

    };

    useEffect(() => {
        fetchData();
    }, [])








    return (
        <>
            <div>
                <Nav />
                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',marginTop:'11vh' }}>
                    <div>
                        <div className={JobFinderCss.searchbox}>
                            <input className={JobFinderCss.searchDec} placeholder={`${searchtype}`} />

                        </div>
                        <br /><br /><br />

                        {jobs.map((job) => (

                            <Card
                                key={job._id}
                                companyName={job.companyName}
                                logo={job.logo}
                                jobPosition={job.jobPosition}
                                salary={job.salary}
                                jobType={job.jobType}
                                remoteOffice={job.remoteOffice}
                                location={job.location}
                                jobDescription={job.jobDescription}
                                aboutCompany={job.aboutCompany}
                                skillsRequired={job.skillsRequired}
                                information={job.information} />

                        ))}





                    </div>
                </div>
            </div>
        </>
    )
}

export default JobFinder;