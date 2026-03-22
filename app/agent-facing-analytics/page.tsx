import { genPageMetadata } from '../seo';
import AgentFacingAnalytics from '@/components/AgentFacingAnalytics';

export const metadata = genPageMetadata({
    title: 'Agent-Facing Analytics',
    description:
        'Apache Pinot powers agent-facing analytics — real-time data access for AI agents, LLMs, RAG systems, and autonomous decision engines.'
});

const AgentFacingAnalyticsPage = () => {
    return <AgentFacingAnalytics />;
};

export default AgentFacingAnalyticsPage;
