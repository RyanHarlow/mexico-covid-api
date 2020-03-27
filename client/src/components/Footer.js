import React from 'react';

function Footer(props){
    return(
        <footer style={{backgroundColor: 'black'}} class="footer is-black has-text-white">
  <div class="content has-text-centered">
    <p>
      <strong style={{color:'white'}}>COV MX</strong> by Ryan Harlow. The website and source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 
    </p>
    <p>API documentation can be found <a href='https://github.com/RyanHarlow/mexico-covid-api'>Here</a></p>
  </div>
</footer>
    )
}

export default Footer;