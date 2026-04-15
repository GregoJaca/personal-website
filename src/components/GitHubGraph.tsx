import { useState } from 'react';
import GitHubCalendarComponent from 'react-github-calendar';

const GitHubCalendar = (GitHubCalendarComponent as any).default || GitHubCalendarComponent;

const GitHubGraph = () => {
    const [totalContributions, setTotalContributions] = useState<number | null>(null);

    const theme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: [
            'rgba(255, 255, 255, 0.05)', 
            '#0e4429',                   
            '#006d32',                   
            '#26a641',                   
            '#39d353',                   
        ],
    };

    return (
        <div className="github-graph-container">
            <h2 className="text-xs font-medium text-zinc-500 mb-6 uppercase tracking-widest">
                Contributions in the last year{totalContributions !== null ? `: ${totalContributions}` : ''}
            </h2>
            <div id="no-scrollbar-container" className="bg-zinc-900/40 p-10 rounded-xl border border-zinc-800/10 backdrop-blur-md overflow-x-auto transition-all duration-500">
                <GitHubCalendar 
                    username="GregoJaca" 
                    colorScheme='dark'
                    theme={theme}
                    hideTotalCount={true}
                    hideColorLegend={true}
                    blockRadius={2}
                    blockMargin={4}
                    blockSize={12}
                    transformData={(data: any) => {
                        const total = data.reduce((sum: number, day: any) => sum + day.count, 0);
                        if (total !== totalContributions) {
                            setTotalContributions(total);
                        }
                        return data;
                    }}
                />
            </div>
        </div>
    );
};

export default GitHubGraph;
