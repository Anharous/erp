'use client';
import React, { useState } from 'react';
import './login.css';
import { useRouter } from 'next/navigation';

interface Credentials {
    username: string;
    password: string;
}

const validCredentials: Credentials[] = [
    { username: '2022peccb101', password: 'Abinaya' },
    { username: '2022peccb105', password: 'Amirtha' },
    { username: '2022peccb114', password: 'Dhanaya' },
    { username: '2022peccb118', password: 'Gayathri' },
    { username: '2022peccb149', password: 'Logeshwary' },
];

const LoginPage: React.FC = () => {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!userId && !password) {
            setError('Username and password are required to login');
            return;
        }

        if (!userId) {
            setError('Username is required');
            return;
        }

        if (!password) {
            setError('Password is required');
            return;
        }

        const user = validCredentials.find((user) => user.username === userId);
        if (!user) {
            setError('Wrong username');
            return;
        }
        if (user.password !== password) {
            setError('Wrong password');
            return;
        }
        setError('');
        router.push('/Component/Student'); 
    };

    return (
        <div className="container">
            <div className="loginpage">
                <div className="loginleft">
                    <div className="login_logo">
                        <img src="/peclogo.png" alt="logo" />
                        <h1>Panimalar Engineering College</h1>
                    </div>
                    <h2>Welcome!</h2>
                    <p>Please log in to access your personalized dashboard.</p>
                </div>
                <div className="loginright">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="user">
                            <label htmlFor="user_id">User ID:</label><br />
                            <input
                                type="text"
                                id="user_id"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label><br />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="button" type="submit">Login</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


// 'use client';
// import "./login.css"
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation'; // Note the change here

// interface LoginResponse {
//     status: string;
//     role?: string;
//     message?: string;
// }

// const LoginPage: React.FC = () => {
//     const [userId, setUserId] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [error, setError] = useState<string>('');
//     const router = useRouter();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post<LoginResponse>('http://localhost/login.php', {
//                 user_id: userId,
//                 password: password
//             });
//             if (response.data.status === 'success') {
//                 switch (response.data.role) {
//                     case 'admin':
//                         router.push('/admin');
//                         break;
//                     case 'faculty':
//                         router.push('/faculty');
//                         break;
//                     case 'student':
//                         router.push('/student');
//                         break;
//                     case 'hod':
//                         router.push('/hod');
//                         break;
//                     default:
//                         setError('Unknown role');
//                 }
//             } else {
//                 setError(response.data.message || 'Unknown error');
//             }
//         } catch (error) {
//             setError('An error occurred during login');
//         }
//     };

//     return (
//         <div className="container">
//         <div className="loginpage">
//             <div className="loginleft">
//                 <div className="login_logo">
//                 <img src="/peclogo.png" alt="logo" />
//                 <h1>Panimalar Engineering College</h1>
//                 </div>
//                 <h2>Welcome!</h2>
//                 <p>Please log in to access your personalized dashboard.</p>
//             </div>
//             <div className="loginright">
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="user">
//                     <label htmlFor="user_id">User ID:</label><br />
//                     <input
//                         type="text"
//                         id="user_id"
//                         value={userId}
//                         onChange={(e) => setUserId(e.target.value)}
//                     />
//                 </div>
//                 <div className="password">
//                     <label htmlFor="password">Password:</label><br />
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button className="button" type="submit">Login</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//             </form>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default LoginPage;
