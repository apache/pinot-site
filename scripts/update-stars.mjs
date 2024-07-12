import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

async function fetchStars(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 403) {
                // Rate limit exceeded
                throw new Error('Rate limit exceeded');
            }
            throw new Error(`Error fetching repository data: ${response.statusText}`);
        }
        const json = await response.json();
        const stars = json.stargazers_count;

        return formatNumber(stars);
    } catch (error) {
        console.error(error);
        return '';
    }
}

async function updateStarsLocally() {
    const stars = await fetchStars('apache', 'pinot');
    const data = {
        stars,
        timestamp: Date.now()
    };
    writeFileSync('./public/stars.json', JSON.stringify(data, null, 2));
    console.log('Stars count updated successfully:', stars);
}

updateStarsLocally();
