export function formatNumber(num: number): string {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

export function isLessThanOneHourAgo(date: Date): boolean {
    const oneHourInMillis = 60 * 60 * 1000; // Number of milliseconds in one hour
    const currentTime = new Date().getTime();
    const inputTime = date.getTime();

    return currentTime - inputTime < oneHourInMillis;
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
