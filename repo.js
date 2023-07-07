import "dotenv/config.js";
import { Octokit } from "@octokit/core";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
    auth: GITHUB_TOKEN,
});

await octokit.request("POST /user/repos", {
    name: "Hello-World333",
    description: "This is your first repo!",
    homepage: "https://github.com",
    private: true,
    is_template: false,
    headers: {
        "X-GitHub-Api-Version": "2022-11-28",
    },
});
