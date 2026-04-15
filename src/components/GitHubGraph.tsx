import GitHubCalendarComponent from 'react-github-calendar';

// Handle CJS/ESM interop where the component might be under .default
const GitHubCalendar = (GitHubCalendarComponent as any).default || GitHubCalendarComponent;

const GitHubGraph = () => {
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
            <GitHubCalendar 
                username="GregoJaca" 
                colorScheme='dark'
                theme={theme}
                hideTotalCount={true}
                hideColorLegend={true}
                blockRadius={2}
                blockMargin={4}
                blockSize={12}
            />
        </div>
    );
};

export default GitHubGraph;
