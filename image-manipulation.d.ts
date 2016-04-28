declare class ImageMethods {

    constructor(canvas: HTMLCanvasElement);

    crop(x: number, y: number, width: number, height: number): ImageMethods;
    rotate(degrees: number): ImageMethods;
    resize(width: number, height: number): ImageMethods;

    static getCanvasFromFile(file: File, callback: (canvas: HTMLCanvasElement) => any): void;
    static getCanvasFromImage(image: HTMLImageElement): HTMLCanvasElement;
    static getOrientationFromFile(file: File, callback: (canvas: HTMLCanvasElement) => any): void;
    static getCanvasFromUrl(url: string, callback: (canvas: HTMLCanvasElement) => any): void;

}
