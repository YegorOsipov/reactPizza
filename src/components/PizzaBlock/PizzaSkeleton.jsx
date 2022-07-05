import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className="pizza-block pizza-block-skeleton"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="125" cy="132" r="125" />
        <rect x="2" y="416" rx="10" ry="10" width="91" height="45" />
        <rect x="142" y="58" rx="0" ry="0" width="6" height="44" />
        <rect x="128" y="416" rx="25" ry="25" width="150" height="45" />
        <rect x="2" y="275" rx="10" ry="10" width="275" height="27" />
        <rect x="2" y="318" rx="9" ry="9" width="275" height="77" />
    </ContentLoader>
)

export default MyLoader

