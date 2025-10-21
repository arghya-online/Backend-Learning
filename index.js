require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000; // use env variable or fallback

const githubData = {
  "login": "arghya-online",
  "id": 168770837,
  "node_id": "U_kgDOCg89FQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/168770837?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/arghya-online",
  "html_url": "https://github.com/arghya-online",
  "followers_url": "https://api.github.com/users/arghya-online/followers",
  "following_url": "https://api.github.com/users/arghya-online/following{/other_user}",
  "gists_url": "https://api.github.com/users/arghya-online/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/arghya-online/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/arghya-online/subscriptions",
  "organizations_url": "https://api.github.com/users/arghya-online/orgs",
  "repos_url": "https://api.github.com/users/arghya-online/repos",
  "events_url": "https://api.github.com/users/arghya-online/events{/privacy}",
  "received_events_url": "https://api.github.com/users/arghya-online/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Arghya",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": "I am a developer based in India, currently working on Frontend Development. ",
  "twitter_username": "ArghyaOnline1",
  "public_repos": 23,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2024-05-02T18:07:55Z",
  "updated_at": "2025-10-17T15:11:00Z"
}

app.get('/', (req, res) => {
  res.send('<h1>Welcome back</h1>');
});

app.get('/twitter', (req, res) => {
  res.send('arghyadotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>Do Login</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h1>Watch our videos</h1>');
});

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});
