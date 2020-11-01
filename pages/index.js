import React, { useState, useEffect } from 'react'
import { Layout, Post, AuthBanner, BeSponsorBanner, Root } from "../components"
import { posts } from "../api"
import { Title } from '../components/Typography';

function Home(props) {
    const [getPosts, setPosts] = useState(posts);

    return (
        <Root>
            <Layout>
                <main>
                    <section className="posts">
                        <div className="posts__container">
                            <header className="posts__header">
                                <Title>

                                    Taze Çıkanlar
                                </Title>
                            </header>
                            <div className="posts__grid">
                                {
                                    getPosts.map((post, index) => (
                                        <Post
                                            key={index}
                                            title={post.title}
                                            description={post.description}
                                            author={post.author}
                                            cover={post.cover}
                                            date={post.date}
                                            slug={post.slug}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <aside className="sidebar">
                            <div className="sidebar__container">
                                <AuthBanner />
                                <BeSponsorBanner />

                            </div>
                        </aside>
                    </section>
                </main>
            </Layout>
        </Root>
    )
}

export default Home