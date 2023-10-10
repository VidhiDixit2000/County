import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/Images';

export default class CustomCarouselWrapper extends LightningElement {
    blocks=[
        {
            image:CAROUSEL_IMAGES+'/Images/Image-1.jpeg',
        },
        {
            image:'${CAROUSEL_IMAGES}/Images/Image-2.jpeg',
        },
        {
            image:'${CAROUSEL_IMAGES}/Images/Image-3.jpeg',
        },
        {
            image:'${CAROUSEL_IMAGES}/Images/Image-4.jpeg',
        },
        {
            image:'${CAROUSEL_IMAGES}/Images/Image-5.jpeg',
        },
        {
            image:'${CAROUSEL_IMAGES}/Images/Resiliency center.png',
        }
    ];
}