import React from "react";
import { Form } from "react-bootstrap";
import { SOCIAL_PROFILES_TEMPLATE } from "../../../constants";

const SocialProfiles = ({ socialProfiles, setSocialProfiles }) => {
  const handleSocialProfilesChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSocialProfiles = [...socialProfiles];
    updatedSocialProfiles[index][name] = value;
    setSocialProfiles(updatedSocialProfiles);
  };

  const addSocialProfileField = () => {
    setSocialProfiles([...socialProfiles, SOCIAL_PROFILES_TEMPLATE]);
  };

  const removeSocialProfileField = (index) => {
    const updatedSocialProfiles = [...socialProfiles];
    updatedSocialProfiles.splice(index, 1);
    setSocialProfiles(updatedSocialProfiles);
  };

  return (
    <>
      {socialProfiles.map((profile, index) => (
        <Form key={index}>
          <Form.Group controlId="platform">
            <Form.Label>Platform</Form.Label>
            <Form.Control
              type="text"
              name="platform"
              value={profile.platform}
              onChange={(e) => handleSocialProfilesChange(e, index)}
            />
          </Form.Group>
          <Form.Group controlId="profileLink">
            <Form.Label>Profile Link</Form.Label>
            <Form.Control
              type="text"
              name="profileLink"
              value={profile.profileLink}
              onChange={(e) => handleSocialProfilesChange(e, index)}
            />
          </Form.Group>
          {/* Add more form fields for other social profile details */}
          <button type="button" onClick={() => removeSocialProfileField(index)}>
            Remove
          </button>
        </Form>
      ))}
      <button type="button" onClick={addSocialProfileField}>
        Add Social Profile
      </button>
    </>
  );
};

export default SocialProfiles;
