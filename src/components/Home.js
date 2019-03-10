import React from 'react';
const Home =  () =>{
    return <div className="container wrapper">
			
			<div className="row">
				<div className="col-sm-3 col-centered">
					<img alt="profile-picture" className="img-responsive img-circle user-picture center-block" src="https://avatars3.githubusercontent.com/u/13873668?s=400" />
				</div>
			</div>
			
			<div className="row">
				<div className="col-xs-12 user-profile text-center">
					<h1 id="user-name">Godti Vinod</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 user-social text-center">

            <a href="https://codepen.io/GodtiVinod/" title="Codepen"><i className="fa fa-codepen fa-3x" aria-hidden="true"></i></a>

			<a href="mailto:venkat.godti3@gmail.com" title="Email"><i className="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.freecodecamp.org/gvinod1991" title="FreeCodecamp"><i className="fa fa-free-code-camp fa-3x" aria-hidden="true"></i></a>



            <a href="https://github.com/Gvinod1991" title="GitHub"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>




            <a href="https://www.linkedin.com/in/godti-vinod-37bb46a9/" title="LinkedIn"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>



            <a href="https://medium.com/@satya.narayan" title="Medium"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a>


           <a href="https://twitter.com/GodtiVinod" title="Twitter"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>

				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-md-offset-4 user-description text-center">
					<p>Hi I&#39;m Godti Vinod . My actual name is Godti B B Satyanarayan and i am software developer,have interest in learning latest mobile and web technologies.I love travelling,would
say if travelling is free i will roaming around the world and never come back.Bike riding is one of my
hobby and also have interest in modified bikes and cars.</p>
				</div>
			</div>
			<div className="push"></div>
		</div>

}

export default Home;