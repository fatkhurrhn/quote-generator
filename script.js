// Function to display a random quote
function fetchQuote() {
    document.querySelector('.share').style.display = '';
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${randomQuote.content}"`;
    document.getElementById('author').innerText = `- ${randomQuote.author}`;
}

// Event listener for the generate quote button
document.getElementById('generate-btn').addEventListener('click', fetchQuote);

// Sharing functions
function shareOnSocialMedia(platform) {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('author').innerText;
    let url = '';

    if (platform === 'facebook') {
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://example.com')}&quote=${encodeURIComponent(quoteText + ' ' + authorText)}`;
    } else if (platform === 'twitter') {
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + ' ' + authorText)}`;
    } else if (platform === 'linkedin') {
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://example.com')}&summary=${encodeURIComponent(quoteText + ' ' + authorText)}`;
    }

    window.open(url, '_blank');
}

document.getElementById('share-btn-fb').addEventListener('click', () => shareOnSocialMedia('facebook'));
document.getElementById('share-btn-twt').addEventListener('click', () => shareOnSocialMedia('twitter'));
document.getElementById('share-btn-li').addEventListener('click', () => shareOnSocialMedia('linkedin'));