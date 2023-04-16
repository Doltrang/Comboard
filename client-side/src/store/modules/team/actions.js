export default {
  async createTeam(context, payload) {
    const teamObj = payload.teamObj;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamObj),
    };

    try {
      // Make a POST request to the API endpoint
      const response = await fetch("/api/team/create", requestOptions);

      // Check if the response is successful
      if (!response.ok) {
        // Handle error response
        const errorObj = await response.json();
        throw new Error(errorObj.error);
      }

      // Extract the created team data from the response
      const successData = await response.json();

      //Add the created team to the organiation's teams
      await context.dispatch("addTeamToOrganization", { organizationID: context.rootGetters.selectedOrganizationID, teamID: successData.createdTeam._id });

      // Return the created team data
      return successData;
    } catch (error) {
      throw new Error("Failed to create team.");
    }
  },
  async addTeamToOrganization(_, payload) {
    const organizationID = payload.organizationID;
    const teamID = payload.teamID;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ organizationID, teamID }),
    };

    try {
      const response = await fetch("/api/organization/team", requestOptions);

      // Check if the response is successful
      if (!response.ok) {
        // Handle error response
        const errorObj = await response.json();
        throw new Error(errorObj.error);
      }

      const successData = await response.json();

      // Return the success data from the api call
      return successData;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create team.");
    }
  },
};