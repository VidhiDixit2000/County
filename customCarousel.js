import { LightningElement } from 'lwc';

export default class LWCParentSliders extends LightningElement {
    slider1Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cHrn&oid=00DDS000000t9TX&lastMod=1697139467000';
    slider2Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cHsC&oid=00DDS000000t9TX&lastMod=1697140198000';
    slider3Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cHrx&oid=00DDS000000t9TX&lastMod=1697140082000';
    slider4Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cKvN&oid=00DDS000000t9TX&lastMod=1697221591000';
    slider5Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cKvS&oid=00DDS000000t9TX&lastMod=1697221691000';
    slider6Image = 'https://countyofcolumbiana123--columdev.sandbox.file.force.com/servlet/servlet.ImageServer?id=015DS000002cKvh&oid=00DDS000000t9TX&lastMod=1697221900000';
    autoScroll = true;

    get sliderData() {
        return [{
            "image": this.slider1Image,
        },
        {
            "image": this.slider2Image,
        },
        {
            "image": this.slider3Image,
        },
        {
            "image": this.slider4Image,
        },
        {
            "image": this.slider5Image,
        },
        {
            "image": this.slider6Image,
        },
        ]
    }
}