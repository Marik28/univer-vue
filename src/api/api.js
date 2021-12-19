import config from "../config";
import "../models/schemas.js";
import isEmpty from "lodash/isEmpty";
export {
  fetchGroups,
  fetchSchedule,
  fetchAssignments,
  fetchSubjects,
  buildUrl,
};

/**
 *
 * @param {String} endpoint
 * @param {Object.<String, String} params - object with string pairs key-value
 * @returns {URL}
 */
function buildUrl(endpoint, params) {
  const url = new URL(config.base_api_url + endpoint);
  if (!isEmpty(params)) {
    Object.entries(params)
      .filter((value) => !isEmpty(value[1]))
      .forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
  }
  return url;
}

/**
 * @returns {Array<Group>}
 */
async function fetchGroups() {
  const response = await fetch(
    config.base_api_url + config.groups_endpoint,
    {}
  );
  const data = await response.json();
  return data;
}

/**
 * @returns {Array<Lesson>}
 */
async function fetchSchedule(group, subgroup = 3, parity = 3) {
  const url = new URL(config.base_api_url + config.lessons_endpoint);
  const query = new URLSearchParams({
    subgroup: subgroup,
  });

  if (group) {
    query.set("group", group);
  }
  if (parity) {
    query.set("parity", parity);
  }
  // как сделать правильно то?
  const response = await fetch(`${url}?${query}`);
  const data = await response.json();
  return data;
}

/**
 * @returns {Array<Assignment>}
 */
async function fetchAssignments(group) {
  const url = buildUrl(config.assignments_endpoint, {
    group: group,
  });
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 *
 * @param {string} group
 * @param {boolean} with_links_only
 * @returns {Array<Subject>}
 */
async function fetchSubjects(group, with_links_only = true) {
  const url = buildUrl(config.subjects_endpoint, {
    with_links_only: with_links_only,
    group: group,
  });
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
