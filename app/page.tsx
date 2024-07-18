import Image from "next/image";
import  "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="login_header">
        <div>
        <img src="/peclogo.png" alt="" />
        </div>
      </div>
      <div className="login_modules">
        <div className="module_admin">
          <Link href='/Component/Loginform'>
          <img className="img" src="/loginadmin.png" alt="admin" />
          <p>Admin</p></Link>
        </div>
        <div className="pair_module">
          <div className="module">
            <img className="img" src="/loginhod.png" alt="hod" />
            <p>HOD</p>
          </div>
          <div className="login">
            <p>LogIn</p>
          </div>
          <div className="module">
            <img className="img" src="/loginfaculty.png" alt="faculty" />
            <p>Faculty</p>
          </div>
        </div>
        <div className="module_student">
          <img className="img" src="/loginstudent.png" alt="student" />
          <p>Student</p>
        </div>

      </div>
    </div>
  );
}
