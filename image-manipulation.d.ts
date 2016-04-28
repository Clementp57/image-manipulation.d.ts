declare class ImageMethods {
    static getCanvasFromFile(file: File, callback: (canvas: HTMLCanvasElement) => any): void;
    static getCanvasFromImage(image: HTMLImageElement): HTMLCanvasElement;
    static getOrientationFromFile(file: File, callback: (canvas: HTMLCanvasElement) => any): void;
    static getCanvasFromUrl(url: string, callback: (canvas: HTMLCanvasElement) => any): void;
}
