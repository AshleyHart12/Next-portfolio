import Head from 'next/head'
import Card from '@components/Card'

export default function Projects() {
    return (
    <>
        <Head>
            <title>Projects</title>
        </Head>
        <h1>Projects</h1>

        <Card title="Lampros Labs" src="/images/lampros.gif" alt="Walkthrough of client site" modalTitle="Lampros Labs" technology="HTML | JAVASCRIPT | BOOTSTRAP | PHP | WORDPRESS" modalDescription="Our team has helped many clients with their custom Wordpress sites, as well as the building of a fullstack application for a startup" />
        <Card title="Vantage Ltd." src="/images/Vantage.png" alt="Element from last project at company" modalTitle="Vantage Ltd." technology="ANGULAR | BOOTSTRAP APIS" modalDescription="Build out of a fullstack application that includes an app, website, and theme park kiosk" />
    </>
    )
}