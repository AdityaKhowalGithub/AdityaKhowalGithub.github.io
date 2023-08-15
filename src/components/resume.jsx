
// import React, { useEffect } from 'react'
// import pdfURL from './PDF/Aditya_khowal_resume.pdf';

// const Resume = () => {
//     useEffect(() => {
//         document.body.classList.add('resume-page');

//         return () => {
//             document.body.classList.remove('resume-page');
//         };
//     }, []);
//     return (

//             <div>
//                 <iframe
//                     src={`${pdfURL}#toolbar=0`}
//                     className="pdf"
//                     title="Resume PDF"
//                 />
//             </div>
//     );
// };


// export default Resume;

import React from 'react';
import pdfURL from './PDF/Aditya_khowal_resume.pdf';

class Resume extends React.Component {
    // componentDidMount() {
    //     document.body.classList.add('resume-page');
    // }

    // componentWillUnmount() {
    //     document.body.classList.remove('resume-page');
    // }

    render() {
        return (
            <div className='pp'>
                <iframe
                    src={`${pdfURL}#view=Fit_to_page`}
                    className="pdf"
                    title="Resume PDF"
                />
            </div>
        );
    }
}

export default Resume;
