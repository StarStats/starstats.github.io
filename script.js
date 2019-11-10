function githubRepository() {
    window.location.href = "github/repository/index.html"
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function githubRepo() {
    var openURL = "stats.html?user=" + encodeURIComponent(document.getElementById("githubUser").value) + "&repo=" + encodeURIComponent(document.getElementById("githubRepo").value);
    window.location.href = openURL;
}

function githubRepoLoad() {
    var GitHubUser = getURLParameter("user");
    var GitHubRepo = getURLParameter("repo");
    var jsonURL = "https://api.github.com/repos/" + GitHubUser + "/" + GitHubRepo;
    window.open(jsonURL)
}