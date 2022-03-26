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
        console.info(`Attributed: ${name}, ${oldValue}, ${newValue} changed!`);
    }


    // Digunakan untuk mengamati perubahan nilai attribute caption.
    /*
        Kita bisa menetapkan lebih dari satu atribut yang diamati dengan memisahkan nama atribut menggunakan koma.
        contoh: return ["caption", "title", "src", ...];
    */
    static get observedAttributes(){
        return ["caption", "oldValue", "newValue"];
    }
}

customElements.define("image-figure", ImageFigure)