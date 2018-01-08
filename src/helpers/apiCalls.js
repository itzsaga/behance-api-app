const fetchUserInfo = (id, updateState) => {
  const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/';
  const targetUrl = `https://api.behance.net/v2/users/${id}?client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`;
  fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then((json) => {
      updateState('userInfo', json.user);
    })
    .catch((err) => {
      console.log(`There was an error fetching user info: ${err}`);
    });
};

const fetchUserProjects = (id, updateState) => {
  const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/';
  const targetUrl = `https://api.behance.net/v2/users/${id}/projects?client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`;
  fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then((json) => {
      updateState('userProjects', json.projects);
    })
    .catch((err) => {
      console.log(`There was an error fetching projects: ${err}`);
    });
};

const fetchUserFollowers = (id, updateState) => {
  const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/';
  const targetUrl = `https://api.behance.net/v2/users/${id}/followers?client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`;
  fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then((json) => {
      updateState('userFollowers', json.followers);
    })
    .catch((err) => {
      console.log(`There was an error fetching followers: ${err}`);
    });
};

const fetchUserFollowings = (id, updateState) => {
  const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/';
  const targetUrl = `https://api.behance.net/v2/users/${id}/following?client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`;
  fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then((json) => {
      updateState('userFollowing', json.following);
    })
    .catch((err) => {
      console.log(`There was an error fetching followings: ${err}`);
    });
};

const fetchWorkExperience = (id, updateState) => {
  const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/';
  const targetUrl = `https://api.behance.net/v2/users/${id}/work_experience?client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`;
  fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then((json) => {
      updateState('userWorkExperience', json.work_experience);
    })
    .catch((err) => {
      console.log(`There was an error fetching work experience: ${err}`);
    });
};

export default {
  fetchUserInfo,
  fetchWorkExperience,
  fetchUserProjects,
  fetchUserFollowers,
  fetchUserFollowings
};
