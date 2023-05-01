export default {
  async createTaskBoard(context, payload) {
    const userID = payload.userID;
    const organizationID = payload.organizationID;
    const taskBoardName = payload.taskBoardName;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
      body: JSON.stringify({ userID, organizationID, taskBoardName }),
    };

    try {
      // Make a POST request to the API endpoint
      const response = await fetch("/api/taskboard", requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    } catch (error) {
      throw new Error(error.message || "Failed to create Task Board.");
    }
  },
  async getTaskBoards(context, payload) {
    const userID = payload.userID;
    const organizationID = payload.organizationID;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
    };

    try {
      // Make a POST request to the API endpoint
      const response = await fetch(`/api/taskboards?userID=${userID}&organizationID=${organizationID}`, requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData?.taskBoards;
    } catch (error) {
      throw new Error(error.message || "Failed to get Task Boards.");
    }
  },
  async getTaskBoard(context, payload) {
    const taskBoardID = payload.taskBoardID;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
    };

    try {
      // Make a POST request to the API endpoint
      const response = await fetch(`/api/taskboard?taskBoardID=${taskBoardID}`, requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData?.taskBoard;
    } catch (error) {
      throw new Error(error.message || "Failed to get Task Board's data!");
    }
  },
  async addTask(context, payload) {
    const taskBoardID = payload.taskBoardID;
    const taskListID = payload.taskListID;
    const taskObj = payload.taskObj;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
      body: JSON.stringify({ taskBoardID, taskListID, taskObj }),
    };

    try {
      const response = await fetch("/api/task/add", requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    } catch (error) {
      throw new Error(error.message || "Failed to add Task.");
    }
  },
  async moveTaskList(context, payload) {
    const taskBoardID = payload.taskBoardID;
    const movedListNewIndex = payload.movedListNewIndex;
    const movedListOldIndex = payload.movedListOldIndex;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
      body: JSON.stringify({ taskBoardID, movedListNewIndex, movedListOldIndex }),
    };

    try {
      const response = await fetch("/api/tasklist/move", requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    } catch (error) {
      throw new Error(error.message || "Failed to move Task list.");
    }
  },
  async moveTaskBetweenCurrList(context, payload) {
    const taskBoardID = payload.taskBoardID;
    const taskListID = payload.taskListID;
    const movedTaskNewIndex = payload.movedTaskNewIndex;
    const movedTaskOldIndex = payload.movedTaskOldIndex;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
      body: JSON.stringify({ taskBoardID, taskListID, movedTaskNewIndex, movedTaskOldIndex }),
    };

    try {
      const response = await fetch("/api/task/move/currlist", requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    } catch (error) {
      throw new Error(error.message || "Failed to move Task under the current list.");
    }
  },
  async moveTaskToOtherList(context, payload) {
    const taskBoardID = payload.taskBoardID;
    const listIDToMove = payload.listIDToMove;
    const taskObj = payload.taskObj;
    const moveToIndex = payload.moveToIndex;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${context.rootGetters.loggedUserToken}`,
      },
      body: JSON.stringify({ taskBoardID, listIDToMove, taskObj, moveToIndex }),
    };

    try {
      const response = await fetch("/api/move/task", requestOptions);

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    } catch (error) {
      throw new Error(error.message || "Failed to move Task.");
    }
  },
};
