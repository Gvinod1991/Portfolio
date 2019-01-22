import React from 'react';
const Home =  () =>{
    return <div className="container wrapper">
			
			<div className="row">
				<div className="col-sm-3 col-centered">
					<img alt="profile-picture" className="img-responsive img-circle user-picture center-block" src="https://themes.gohugo.io//theme/hugo-theme-nix/profile.jpg" />
				</div>
			</div>
			
			<div className="row">
				<div className="col-xs-12 user-profile text-center">
					<h1 id="user-name">Godti Vinod</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 user-social text-center">

            <a href="your_slack_invite_url" title="Slack"><i className="fa fa-slack fa-3x" aria-hidden="true"></i></a>


            <a href="https://twitter.com/your_twitter" title="Twitter"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>


            <a href="https://plus.google.com/your_googleplus/about" title="Google+"><i className="fa fa-google-plus fa-3x" aria-hidden="true"></i></a>


            <a href="https://facebook.com/your_facebook" title="Facebook"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i></a>



            <a href="https://github.com/your_github" title="GitHub"><i className="fa fa-github fa-3x" aria-hidden="true"></i></a>




            <a href="https://linkedin.com/in/your_linkedin" title="LinkedIn"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>



            <a href="https://t.me/your_telegram" title="Telegram"><i className="fa fa-telegram fa-3x" aria-hidden="true"></i></a>


            <a href="mailto:your_email" title="Email"><i className="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4 col-md-offset-4 user-description text-center">
					<p>Hi I&#39;m Godti Vinod . My actual name is Godti B B Satyanarayan and i am full stack developer,have intrest in learning latest skills in mobile and web technologies.I love travelling,would
say if travelling is free i will roaming around the world and never come back.Bike riding is one of my
hobby and also have interest in modified bikes and cars.</p>
				</div>
			</div>
			<div className="push"></div>
		</div>

}

export default Home;