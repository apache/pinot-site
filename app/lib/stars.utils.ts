export function formatNumber(num: number): string {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

export async function getStars(owner: string, repo: string): Promise<number> {
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

        const stars: number = json.stargazers_count;

        return stars;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getFallbackStars(): Promise<string> {
    try {
        const response = await fetch('/stars.json');
        if (!response.ok) {
            throw new Error(`Error fetching fallback data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.stars;
    } catch (error) {
        console.error(error);
        return ''; // default value in case of an error
    }
}
