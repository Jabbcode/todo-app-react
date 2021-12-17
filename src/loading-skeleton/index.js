import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={'600px'}
    viewBox="0 0 90% 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="72" /> 
    <rect x="0" y="92" rx="2" ry="2" width="100%" height="72" /> 
    <rect x="0" y="184" rx="2" ry="2" width="100%" height="72" /> 
    <rect x="0" y="278" rx="2" ry="2" width="100%" height="72" /> 
    <rect x="0" y="360" rx="2" ry="2" width="100%" height="72" /> 
  </ContentLoader>
)

export { MyLoader }