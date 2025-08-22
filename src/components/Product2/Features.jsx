import React from 'react'

const Features = () => {
    return (
        <div>
            <div className="features-track">
                <section className="section_features">
                    <img
                        src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif"
                        loading="lazy"
                        width="538"
                        sizes="(max-width: 767px) 100vw, 538px"
                        alt=""
                        srcSet="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif 500w, https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493209_circle%201.avif 1076w"
                        className="features-bg1"
                    />
                    <img
                        src="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif 500w, https://cdn.prod.website-files.com/6894c70fdec680168f493130/6894c70fdec680168f493235_01.avif 2000w"
                        alt=""
                        className="features-bg2"
                    />
                    <div className="features-wrapper text-center">
                        <h2
                            id="w-node-a950199f-2e45-8c40-a20e-d831862318e8-8f49312d"
                            className="features-heading text-center"
                        >
                            Humbleteam gets AI.
                            <br />
                            Are you with us?
                        </h2>
                        <button
                            id="w-node-d881b892-6b3f-0f50-5bea-8135d7946171-8f49312d"
                            href="#request"
                            className="btn-primary w-button mt-5"
                        >
                            Get in touch
                        </button>
                        <div
                            className="features-card is-first"
                            style={{
                                willChange: "transform",
                                transform: "translate3d(-6rem, -7rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="features-card-number">01</div>
                            <div className="features-title">
                                We get you to&nbsp;market faster
                            </div>
                            <p className="features-desc">
                                Building on our AI expertise, we deliver ready-to-use designs that work within technical constraints—getting you to market faster.
                            </p>
                        </div>
                        <div
                            className="features-card is-second"
                            style={{
                                willChange: "transform",
                                transform: "translate3d(7rem, -5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="features-card-number">02</div>
                            <div className="features-title">We keep costs down</div>
                            <p className="features-desc">
                                Our efficient process and experience with AI eliminate costly revisions, delivering polished solutions on time and on budget.
                            </p>
                        </div>
                        <div
                            className="features-card is-third"
                            style={{
                                willChange: "transform",
                                transform: "translate3d(-5rem, 5rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="features-card-number">03</div>
                            <div className="features-title">We make AI user-friendly</div>
                            <p className="features-desc">
                                We unite elegant design with AI functionality to create intuitive user experiences that feel natural and effortless.
                            </p>
                        </div>
                        <div
                            className="features-card is-fourth"
                            style={{
                                willChange: "transform",
                                transform: "translate3d(9rem, 7rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="features-card-number">04</div>
                            <div className="features-title">We know what works</div>
                            <p className="features-desc">
                                Skip the guesswork—we implement battle-tested design patterns that have already proven successful with real users.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Features