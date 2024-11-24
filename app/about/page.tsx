import { Metadata } from 'next';

export const dynamic = 'force-static'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About NextSpace',
};

export default async function About()
{
    return (
        <main>
            <h1>About</h1>
            <p>
                This is the about page.
            </p>
        </main>
    );
}