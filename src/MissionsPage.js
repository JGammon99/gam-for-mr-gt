import React from 'react';
import './global.css';
import './MissionsPage.css';

function MissionsPage() {
    return (
        <div className='page-container'>
            <h1 className='title-text'>Missions</h1>
            <div className='verse'>
                <div className="part">"AS FOR US, WE CANNOT HELP SPEAKING</div>
                <div className="part">ABOUT WHAT WE HAVE SEEN AND HEARD."</div>
                <div className="part">ACTS 4:20</div>
            </div>
            <div className='platt-container'>
                <video className='platt-vid' controls>
                    <source src='./david.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h1 className='title-text'>Why do we need missions?</h1>
            <div className="about-text">
                Like David Platt said in the video above, there are billions of people all across the world that do not know who Christ is. Each and every day, people in these areas die without ever hearing the gospel. We cannot be okay with this! 
                Jesus' last words on this earth were to His disciples for them to be witnesses to the <strong>ENDS OF THE EARTH</strong>. As followers of Christ, we are called to witness and testify of what He has done to every nation.
                People all across the world need Christ, and Christians all across the world are to take part in sending and going in order to accomplish this command that Christ gave all of us. 
            </div>
            
            <div className='heart-container'>
                <h1 className='title-text'>Our Heart</h1>
                <img src='./pro3000.jpg' alt='Project 3000' className='project-image'></img>
                <div className="about-text">
                    Through this silly and fun fundraiser, we have two equally important goals. The first is to raise money to send college students all across the 
                    world to live out this command Christ has given us without it being a financial burden. The second is to inform others of missions efforts across the 
                    globe and help them be a part. Specifically, One missionary effort that we want to highlight is IMB's Project 3000 Missionary Explorers. 
                    Through this project missionaries are sent to scout unengaged and unreached people groups in order to find out how to better reach and cultivate 
                    gospel access among these groups. We ask that you pray for these missionaries and the work they are doing in the edges of lostness. We also ask that 
                    you pray about if God is calling you to serve Him in supporting missionary work or even going to proclaim his name to the ends of the earth! 
                </div>
                <div className='learn-more'>
                    <a href='https://www.imb.org/missionary-explorer/' target="_blank" className='learn-more-btn' rel="noreferrer">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default MissionsPage;
