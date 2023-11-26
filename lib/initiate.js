const config = require("../config.json");

async function initiateAuth(req, res) {
  const options = {
    requestType: "code",
    redirectUri: "http://localhost:3000/oauth/callback",
    clientId: config.clientId,
    user_type: "Location",
    scopes: [
      "contacts.readonly",
      "contacts.write",
      "locations/customFields.write",
      "locations/customFields.readonly",
      "locations/customValues.write",
      "locations/customValues.readonly",
      "users.readonly",
      "users.write",
      "calendars.readonly",
      "calendars.write",
      "calendars/events.write",
      "calendars/groups.readonly",
      "calendars/groups.write",
    ],
  };

  return res.redirect(
    `${config.baseUrl}/oauth/chooselocation?response_type=${
      options.requestType
    }&user_type=${options.user_type}&redirect_uri=${
      options.redirectUri
    }&client_id=${options.clientId}&scope=${options.scopes.join(" ")}`
  );
}

module.exports = initiateAuth;
