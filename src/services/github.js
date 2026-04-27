import axios from 'axios';
import { GITHUB_API_URL } from '../utils/constants';

/**
 * Fetch all public repositories for the user
 * @returns {Promise<Array>} Array of repository objects
 */
export const fetchGitHubRepos = async () => {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            params: {
                sort: 'updated',
                per_page: 100,
            },
        });

        // Categorize projects - Only 3 specific personal projects
        const personalProjects = ['context-memo', 'contex-memo', 'talk-bro', 'turn-guard-ai', 'bunk-manager', 'bunkmanager'];
        const groupProjects = ['mediplace', 'careerforge', 'ble-mirror', 'ble_mirror'];
        
        // Filter out specific repos and categorize
        const allRepos = response.data
            .filter(repo => {
                const name = repo.name.toLowerCase();
                // Exclude specific repositories
                const excludedRepos = ['n8n', 'aswsowe', 'gencolo', 'expence'];
                return !excludedRepos.includes(name);
            });

        // Separate personal and group projects
        const personalRepos = allRepos
            .filter(repo => personalProjects.includes(repo.name.toLowerCase()))
            .sort((a, b) => b.stargazers_count - a.stargazers_count);

        const groupRepos = allRepos
            .filter(repo => groupProjects.includes(repo.name.toLowerCase()))
            .sort((a, b) => b.stargazers_count - a.stargazers_count);

        // Return categorized repos
        return {
            personal: personalRepos,
            group: groupRepos,
            all: allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count)
        };
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        throw new Error('Failed to fetch repositories. Please try again later.');
    }
};

/**
 * Format repository data for display
 * @param {Object} repo - Repository object from GitHub API
 * @returns {Object} Formatted repository data
 */
export const formatRepoData = (repo) => {
    return {
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
        createdAt: new Date(repo.created_at),
        updatedAt: new Date(repo.updated_at),
    };
};
