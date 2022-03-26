class ImageFigure extends HTMLElement{
    constructor(){
        super();
        console.info("constructed !");
    }

    connectedCallback(){
        console.info("connected!");
    }

    disconnectedCallback(){
        console.info("disconnected!");
    }

    adoptedCallback(){
        console.info("adopted!");
    }

    attributeChangedCallback(name, oldValue, newValue){
        console.info(`Attributed: ${name} changed!`);
    }


    static get observedAttributes(){
        return ["caption"];
    }
}

customElements.define("image-figure", ImageFigure)