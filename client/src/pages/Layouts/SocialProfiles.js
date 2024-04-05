import React from "react";

const SocialProfiles = ({ socialProfiles }) => {
  return (
    <div className="px-5 pb-3 pt-0  bg-white text-dark">
      <h4 className="text-2xl font-bold mb-4">Social Profiles</h4>
      <hr />
      <div className="mb-4 card card-flat">
        <div className=" card card-body">
          {socialProfiles.map((profile, index) => (
            <p key={index} className="text-sm text-gray-500">
              {profile.platform}:{" "}
              <a href={profile.profileLink}>{profile.profileLink}</a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProfiles;
