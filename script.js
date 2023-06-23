const showContent = (contentId) => {
    let content = document.getElementById(contentId);
    let allContent = document.getElementsByClassName('content')[0].children;

    // Hide all content
    for (let i = 0; i < allContent.length; i++) {
        allContent[i].style.display = 'none';
    }

    // Show selected content
    content.style.display = 'block';
}

// Set default content to 'Home'
document.getElementById('home').style.display = 'block';


// Open the Personal Portfolio in a new tab
function openFacebookPage(pageUrl) {
    window.open(pageUrl);
}