export default {
  setSelectedOrganization(state, payload) {
    state.selectedOrganizationID = payload.organizationID;
  },
  setOrganizations(state, payload) {
    state.organizations = payload;
  },
  addOrganization(state, payload) {
    const organizationObj = {
      id: payload.organizationID,
      name: payload.organizationName,
    };

    state.organizations.push(organizationObj);
  },
};
