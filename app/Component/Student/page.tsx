'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Academic from './Academic/page';
import Assignment from './Assignment/page';
import Document from './Document/page';
import Examination from './Examination/page';
import Communication from './Communication/page';
import { GetServerSideProps } from 'next';

interface Student {
    name: string;
    admission: string;
    rollNo: string;
    class: string;
    degree: string;
    department: string;
    course: string;
}

interface Students {
    [key: string]: Student; // Index signature to allow dynamic keys
}

interface PageProps {
    username: string;
}

const Page: React.FC<PageProps> = ({ username }) => {
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

    const handleButtonClick = (component: string) => {
        setSelectedComponent(component);
    };

    const renderComponent = () => {
        if (selectedComponent === null) return null;

        switch (selectedComponent) {
            case 'Academic':
                return <Academic />;
            case 'Assignment':
                return <Assignment />;
            case 'Document':
                return <Document />;
            case 'Examination':
                return <Examination />;
            case 'Communication':
                return <Communication />;
            default:
                return null;
        }
    };

    // Define the students object with a proper type
    const students: Students = {
        '2022peccb101': {
            name: 'Abinaya K',
            admission: '12345678',
            rollNo: '2022peccb101',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb105': {
            name: 'AmirthaLakshmi',
            admission: '12345678',
            rollNo: '2022peccb105',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb114': {
            name: 'Dhanya Sri S',
            admission: '12345678',
            rollNo: '2022peccb114',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb118': {
            name: 'Gayathri S',
            admission: '12345678',
            rollNo: '2022peccb118',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        },
        '2022peccb149': {
            name: 'Logeshwary',
            admission: '12345678',
            rollNo: '2022peccb149',
            class: "III 'A'",
            degree: 'Under Graduate',
            department: 'Department of Computer Science and Business System',
            course: 'B.Tech Computer Science and Business System'
        }
    };

    // Get the student data based on the username (roll number)
    const studentData = students[username.toLowerCase()] || null;

    // Helper function to determine which class to show
    const getStudentClass = (rollNo: string) => {
        switch (rollNo) {
            case '2022peccb101':
                return 'studentone';
            case '2022peccb105':
                return 'studenttwo';
            case '2022peccb114':
                return 'studentthree';
            case '2022peccb118':
                return 'studentfour';
            case '2022peccb149':
                return 'studentfive';
            default:
                return '';
        }
    };

    return (
        <div className="studentpage">
            <div className="header">
                <div className="logo">
                    <img src="/peclogo.png" alt="" />
                    <p>Panimalar</p>
                    <p>Engineering College</p>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={() => handleButtonClick('Academic')}>Academic</button>
                    <button className="btn" onClick={() => handleButtonClick('Assignment')}>Assignment</button>
                    <button className="btn" onClick={() => handleButtonClick('Document')}>Document</button>
                    <button className="btn" onClick={() => handleButtonClick('Examination')}>Examination</button>
                    <button className="btn" onClick={() => handleButtonClick('Communication')}>Communication</button>
                </div>
            </div>
            {studentData ? (
                <div className={getStudentClass(studentData.rollNo)}>
                    <img src="" alt="" />
                    <div>
                        <p>NAME: {studentData.name}</p>
                        <p>ADMISSION: {studentData.admission}</p>
                        <p>ROLLNO: {studentData.rollNo}</p>
                        <p>CLASS: {studentData.class}</p>
                        <p>DEGREE: {studentData.degree}</p>
                        <p>DEPARTMENT: {studentData.department}</p>
                        <p>COURSE: {studentData.course}</p>
                    </div>
                </div>
            ) : (
                <p>No student data available.</p>
            )}
            <div className="screen">
                {renderComponent()}
            </div>
        </div>
    );
};

// Add types for context parameter
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    return {
        props: {
            username: query.username || ''
        }
    };
}

export default Page;





// export default function Page() {


//     return(
//         <div className="studentpage">
//             <div className="header">
//                 <div className="logo">
//                     <img src="/peclogo.png" alt="" />
//                     <p>Panimalar</p>
//                     <p>Engineering College</p>
//                 </div>
//                 <div className="buttons">
//                     <button className="btn">Academic</button>
//                     <button className="btn">Assignment</button>
//                     <button className="btn">Document</button>
//                     <button className="btn">Examination</button>
//                     <button className="btn">Communication</button>    
//                 </div>
//             </div>
//             <div className="studentone">
//                 <img src="" alt="" />
//                 <div>
//                     <p>NAME: Abinaya K</p>
//                     <p>ADMISSION: 12345678</p>
//                     <p>ROLLNO: 2022PECCB101</p>
//                     <p>CLASS: III 'A'</p>
//                     <p>DEGREE: Under Graduate</p>
//                     <p>DEPARTMENT: Department of Computer Science and Business System</p>
//                     <p>COURSE: B.Tech Computer Science and Business System</p>
//                 </div>
//             </div>
//             <div className="studenttwo">
//                 <img src="" alt="" />
//                 <div>
//                     <p>NAME: AmirthaLakshmi</p>
//                     <p>ADMISSION: 12345678</p>
//                     <p>ROLLNO: 2022PECCB105</p>
//                     <p>CLASS: III 'A'</p>
//                     <p>DEGREE: Under Graduate</p>
//                     <p>DEPARTMENT: Department of Computer Science and Business System</p>
//                     <p>COURSE: B.Tech Computer Science and Business System</p>
//                 </div>
//             </div>
//             <div className="studentthree">
//                 <img src="" alt="" />
//                 <div>
//                     <p>NAME: Dhanya Sri S</p>
//                     <p>ADMISSION: 12345678</p>
//                     <p>ROLLNO: 2022PECCB114</p>
//                     <p>CLASS: III 'A'</p>
//                     <p>DEGREE: Under Graduate</p>
//                     <p>DEPARTMENT: Department of Computer Science and Business System</p>
//                     <p>COURSE: B.Tech Computer Science and Business System</p>
//                 </div>
//             </div>
//             <div className="studentfour">
//                 <img src="" alt="" />
//                 <div>
//                     <p>NAME: Gayathri S</p>
//                     <p>ADMISSION: 12345678</p>
//                     <p>ROLLNO: 2022PECCB118</p>
//                     <p>CLASS: III 'A'</p>
//                     <p>DEGREE: Under Graduate</p>
//                     <p>DEPARTMENT: Department of Computer Science and Business System</p>
//                     <p>COURSE: B.Tech Computer Science and Business System</p>
//                 </div>
//             </div>
//             <div className="studentfive">
//                 <img src="" alt="" />
//                 <div>
//                     <p>NAME: Logeshwary</p>
//                     <p>ADMISSION: 12345678</p>
//                     <p>ROLLNO: 2022PECCB149</p>
//                     <p>CLASS: III 'A'</p>
//                     <p>DEGREE: Under Graduate</p>
//                     <p>DEPARTMENT: Department of Computer Science and Business System</p>
//                     <p>COURSE: B.Tech Computer Science and Business System</p>
//                 </div>
//             </div>
//             <div></div>
//             <div className="screen">

//             </div>

//         </div>
//     )
// }
