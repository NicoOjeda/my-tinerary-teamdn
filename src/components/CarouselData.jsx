import React from 'react'
import Carousel from './Carousel'

export default function CarouselData() {

    const items = [
        {url:"https://images6.alphacoders.com/469/469423.jpg" ,title: "New York"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/68/0e/5a/exterior.jpg?w=1100&h=-1&s=1",title: "Hilton Garden Inn"},
        {url: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",title: "Rome"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9d/77/93/entrance-hotel-artemide.jpg?w=1200&h=-1&s=1",title: "Hotel Artemide"},
        {url: "https://images5.alphacoders.com/708/708191.jpg",title: "Berlín"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/22/da/21/grand-hyatt-berlin.jpg?w=1200&h=-1&s=1",title: "Grand Hyatt Berlin"},
        {url: "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg?impolicy=fcrop&w=800&h=533&q=medium",title: "Santorini"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f3/3c/84/pool-outdoor.jpg?w=1100&h=-1&s=1",title: "Andronis Luxury Suites"},
        {url: "https://a.cdn-hotels.com/gdcs/production112/d1899/d77bcff2-a859-4785-bdb1-3b15a0887607.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",title: "Amsterdam"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/fa/2f/21/holland-casino-amsterdam.jpg?w=1200&h=-1&s=1",title: "Holland Casino "},
        {url: "https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/nrosjoo363yog5hsj1bs",title: "Tokio"},
        {url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/41/30/04/corner-king-room-tokyo.jpg?w=1200&h=-1&s=1",title: "Park Hotel Tokyo"},
    ]

return (
    <Carousel data={items} range={4}  />
)
}

