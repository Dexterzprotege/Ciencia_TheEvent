import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.460959492319!2d78.59506221482327!3d17.19641328819331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR+College+Of+Engineering!5e0!3m2!1sen!2sin!4v1555762895377!5m2!1sen!2sin"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Find Us Here!</div>
            </div>

        </div>
    );
};

export default Location;