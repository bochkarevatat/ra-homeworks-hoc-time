// eslint-disable react/prop-types 

import DateTimePretty from "./DateTimePretty";

export default function Video( props) {
console.log('video')
  return (
    <div className="video">
    <iframe
      title="props.url"
      src={props.url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>{" "}
    <DateTimePretty date={props} />{" "}
  </div>
  )
}