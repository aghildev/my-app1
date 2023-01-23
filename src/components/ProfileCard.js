import React from 'react'

function ProfileCard({ title, handler, imgSrc }) {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={imgSrc} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src={imgSrc} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{title}</p>
                        <p class="subtitle is-6">{handler}</p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>{handler}</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">{new Date().toLocaleDateString()}</time>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard