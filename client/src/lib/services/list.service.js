import api from "../api.js";

export const getLists = async () => {return api("/lists")};

export const createList = async (list) => {return api("/lists", "POST", list)};

export const updateList = async (list) => {return api("/lists/${list.id}", "PATCH", list)};

export const deleteList = async (listId) => {return api("/lists/${listId}", "DELETE")};
