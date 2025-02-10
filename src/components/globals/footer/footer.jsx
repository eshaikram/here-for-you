
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="lg-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="title">
              <h4>Need help?</h4>
              <div className="underline-line"></div>
            </div>
            <a className="nav-link" href="/faq">F.A.Q</a>
            <a className="nav-link" href="/contact">Contact Us</a>
          </div>

          <div className="col-lg-4">
            <div className="title">
              <h4>Resources</h4>
              <div className="underline-line"></div>
            </div>
            <a className="nav-link" href="/memorialsite">What is a Memorial Site?</a>
            <a className="nav-link" href="/write-obituary">How to Write an Obituary?</a>
            <a className="nav-link" href="/memorial-flowers">Memorial Flowers & Their Meaning</a>
            <a className="nav-link" href="/dealing-grief">Dealing with Grief & Getting Support</a>
          </div>
        </div>

        <hr />
        {/* <div className="text-left p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }} > 
          © 2024 -
          <span className="last">        Anders Group</span>
        </div> */}
        <div className="bottom">
          <div>
            <span>© 2024 - Anders Group</span>
          </div>
          <div className="bottom-nav">
            <a className="nav-link" href="/terms">Terms of Use</a>
            <span className="dot"></span>
            <a className="nav-link" href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
