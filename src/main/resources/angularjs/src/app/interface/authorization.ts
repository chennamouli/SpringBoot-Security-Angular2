export interface Authorization {
    userId: string;
    authenticated: boolean;
    date: number;
    hasHomePage: string;
    hasDashboardPage: string;
    hasHeroesPage: string;
}