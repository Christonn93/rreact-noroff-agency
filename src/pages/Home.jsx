import { PageTitle } from "../functions/pagetitle";

const Home = () => {
 PageTitle("Home");

 return (
    <> 
   <section className="container-fluid itemPositionRelative" id="section1">
    <div className="d-flex flex-column gap-5 itemPositionAbsoluteCenter">
     <h1 className="text-theme-light fw-semibold">Lorem ipsum dolor sit amet, consectetut dipsicing elit</h1>
     <button className="mt-4 btn btn-theme-primary w-50 text-theme-light border border-theme-light p-3 fs-4">Listings</button>
    </div>
   </section>

   <section className="container my-2" id="section2">
    <div className="d-flex flex-column gap-5">
     <div className="container d-flex gap-3">
      <div>
       <h2 className="d-md-none fw-bold">Your direct access to Noroff's best candidates</h2>
       <div className="imgContainer">
        <img
         className="img-fluid"
         src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         alt=""
        />
       </div>
      </div>
      <div className="d-flex flex-column">
       <div>
        <h2 className="d-none d-md-block fw-bold">Your direct access to Noroff's best candidates</h2>
        <p>
         <span className="fw-semibold">Find talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
         mollit anim id est laborum.
        </p>
       </div>
       <div>
        <button className="btn customButton btn-theme-primary text-theme-light fw-semibold mx-auto mx-md-0">Register as a student</button>
       </div>
      </div>
     </div>

     <div className="container d-flex">
      <div>
       <div>
        <h2 className="d-none d-md-block fw-bold">Your direct access to Noroff's best candidates</h2>
       </div>
       <div>
        <p>
         <span className="fw-semibold">Talents for your organisation.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
         mollit anim id est laborum.
        </p>
       </div>
       <div>
        <button className="btn customButton btn-theme-primary text-theme-light fw-semibold mx-auto mx-md-0">Register as a student</button>
       </div>
      </div>
      <div>
       <div>
        <h2 className="d-md-none fw-bold">Your direct access to Noroff's best candidates</h2>
        <div className="imgContainer">
         <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
         />
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   <section className="section3"></section>
   </>
 );
};

export default Home;
