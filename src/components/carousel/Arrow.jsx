
export default function Arrow(props) {
return (
        <button className="Carousel-arrow" onClick={props.click}>
            {props.icon}
        </button>
    
  )
}