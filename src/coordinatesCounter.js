// import pkg from '@mapbox/sphericalmercator';
// const { SphericalMercator } = pkg;

// const merc = new SphericalMercator({
//     size: 256,
//     antimeridian: true
// });

// console.log(merc.forward([158.83055047248797, 53.050587439650144]));
export const counter = () => {

    const x = (a, r) => r * Math.cos(a * Math.PI / 180);
    const y = (a, r) => r * Math.sin(a * Math.PI / 180);
    
    // const secShirota = 30.86;
    // const ekvator = 40000;
    
    // console.log(parseFloat(y(46, 52).toFixed(6)) / (secShirota * 60 * 60), '\n', x(46, 52).toFixed(6));
    // console.log(ekvator / 360 * Math.cos(46 * Math.PI / 180));
    
    
    // точка отсчета(координаты устройства)
    const lat = 158.83064163853413
    const long = 53.05025870268895
    const latLong = [ 158.83064163853413, 53.05025870268895 ]
    
    // радиус земли для сферы гугл
    const R = 6378136
    // длинна одного градуса
    const G = R * Math.PI / 180
    // масштаб
    const size = 1
    //мера бусоли
    const point = 6
    
    // масштаб смещения
    const m = size / Math.cos(lat * Math.PI / 180)
    
    //смещение x(угл смещения, расстояние)
    const rLong = long - x(36.45 * point, 62.45) / G * m;
    const rLat = lat + y(36.45 * point, 62.45) / G;
    
    console.log(rLat, ",", rLong);    
}