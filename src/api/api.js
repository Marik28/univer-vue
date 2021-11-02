import config from "../config";

export { fetch_groups, fetch_schedule, fetch_assignments, fetch_subjects };

function build_url(endpoint, params) {
  const url = new URL(config.base_api_url + endpoint);
  const query = new URLSearchParams();
  for (let key in params) {
    let value = params[key];
    if (value) {
      query.set(key, value);
    }
  }
  return `${url}?${query}`;
}

const default_headers = {
  accept: "application/json",
};

async function fetch_groups() {
  const response = await fetch(config.base_api_url + config.groups_endpoint, {
    headers: default_headers,
  });
  const data = await response.json();
  return data;
}

async function fetch_schedule(group, subgroup = 3, parity = 3) {
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
  const response = await fetch(`${url}?${query}`, { headers: default_headers });
  const data = await response.json();
  return data;
}

async function fetch_assignments(group) {
  const url = build_url(config.assignments_endpoint, {
    group: group,
  });
  const response = await fetch(url, { headers: default_headers });
  const data = await response.json();
  return data;
}

/**
 *
 * @param {string} group
 * @param {boolean} with_links_only
 * @returns {Array} list_of_subjects
 */
async function fetch_subjects(group, with_links_only = true) {
  const url = build_url(config.subjects_endpoint, {
    with_links_only: with_links_only,
    group: group,
  });
  const response = await fetch(url, { headers: default_headers });
  const data = await response.json();
  return data;
}
