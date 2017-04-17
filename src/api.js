import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
    .then(response => response.data);
};

export const fetchContestList = () => {
  return axios.get(`/api/contests`)
    .then(response => response.data.contests);
};
