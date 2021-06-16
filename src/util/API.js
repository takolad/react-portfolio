/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getReadMe: async function (repo) {
    // repo is an array of strings (repo name)
    const requests = [];
    for (let i = 0; i < repo.length; i++) {
      requests.push(
        axios.get(`https://api.github.com/repos/{owner}/${repo[i]}/readme`),
        {
          owner: "takolad",
        }
      );
    }
    await axios
      .all(requests)
      .then(
        axios.spread(function (...res) {
          return res;
        })
      )
      .catch((err) => console.log(err));
  },
};

//     return axios
//       .all("https://api.github.com/repos/{owner}/{repo}/readme", {
//         owner: "takolad",
//         repo,
//       })
//       .catch((err) => console.log(err));
//   },
