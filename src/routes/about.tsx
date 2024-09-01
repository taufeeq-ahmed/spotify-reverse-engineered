import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
    component: () => <About />,
});

function About() {
    return <div>About</div>;
}

export default About;
