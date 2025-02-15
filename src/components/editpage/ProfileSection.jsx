import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="user-header-edit">
        <div className="profile-section">
          <div className="profile">
            <div className="profile-image">
              <Image
                src="/images/profile.jpg"
                alt="Profile Image"
                width={300}
                height={300}
              />
            </div>
            <button className="btn-edit">
              <i className="fa-solid fa-image"></i> Change Image
            </button>
          </div>

          <div className="detailss">
            <div className="name-editor">
              <input
                placeholder="F Name"
                name="firstName"
                type="text"
                className="name-input"
                defaultValue="F Nam"
              />
              <input
                placeholder="M Name"
                name="middleName"
                type="text"
                className="name-input"
                defaultValue="M Nan"
              />
              <input
                placeholder="L Name"
                name="lastName"
                type="text"
                className="name-input"
                defaultValue="L Nam"
              />
            </div>

            <div className="dob-container">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <div className="dob-outer">
                <div className="dob-input">
                  <label>Date of Birth</label>
                  <input
                    id="dob"
                    type="text"
                    readOnly
                    defaultValue="02/01/2025"
                  />
                </div>
              </div>

              <div className="dob-outer">
                <div className="dob-input">
                  <label>Date of Passing</label>
                  <input
                    id="dod"
                    type="text"
                    readOnly
                    defaultValue="02/01/2025"
                  />
                </div>
              </div>
            </div>

            <div className="location-container">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <input
                placeholder="Last location"
                name="location"
                type="text"
                className="location-input"
                defaultValue="Location"
              />
            </div>
          </div>
        </div>
      </div>

  );
}
