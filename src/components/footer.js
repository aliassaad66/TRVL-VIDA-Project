const React = require("react");

function Footer() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-co1">
              <h4>Company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div class="footer-co1">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">+03-0000000</a></li>
                <li><a href="#">alias_saad66@yahoo.com</a></li>
              </ul>
            </div>
            <div class="footer-co1">
              <h4>Online Booking</h4>
              <ul>
                <li><a href="#">flight tickets booking</a></li>
                <li><a href="#">hotels booking</a></li>
                <li><a href="#">activities trip booking</a></li>
              </ul>
            </div>
            <div class="footer-co1">
              <h4>Follow Us</h4>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  module.exports = Footer;