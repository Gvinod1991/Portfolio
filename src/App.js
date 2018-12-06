import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      yr:(new Date()).getFullYear()
    }
  }
  render() {
    return (
      <div style={{paddingTop:70}}>
        <header>
<nav className="navbar navbar-default navbar-fixed-top navbar-inverse font-header">
	<div className="container-fluid">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" id="green-terminal" href="/">Kod3r@kod3r-dev ~ $</a>
		</div>

		
		<div className="collapse navbar-collapse" id="navbar-collapse-1">
			<ul className="nav navbar-nav navbar-right">
				<li>
					<a href="/">/home/kod3r</a>
				</li>
				
				
				<li className="dropdown">
                    
            		<a href="/about">~/about</a>
            		
        		</li>
        		
				
				<li className="dropdown">
                    
            		<a href="/projects">~/projects</a>
            		
        		</li>
        		

			</ul>
		</div>
	</div>
</nav>
</header>
		<div className="container wrapper">
			
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
					<p>Hi I&#39;m Vinod and this is my website. I am a software developer,love nature and traveling. On this websites you can expect my projects and blog posts about everything I love. Enjoy!</p>
				</div>
			</div>
			<div className="push"></div>
		</div>
      <footer className="footer text-center">
        <p  className="text-center">Copyright &copy; {this.state.yr} Kod3r
        </p>
      </footer>
      </div>
    );
  }
}

export default App;
